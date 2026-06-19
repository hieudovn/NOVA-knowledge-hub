const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const contentRoot = path.resolve(__dirname, '../../../content/wiki');
const requiredFields = ['type', 'status', 'visibility', 'tags', 'source_refs'];
const validTypes = new Set(['index', 'solution', 'capability', 'pattern', 'comparison', 'tender']);
const validStatuses = new Set(['draft', 'reviewed', 'approved', 'public']);
const validVisibility = new Set(['private', 'internal', 'partner', 'public']);

function collectMarkdownFiles(dir) {
  return fs.readdirSync(dir, {withFileTypes: true}).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      return collectMarkdownFiles(fullPath);
    }
    if (/\.(md|mdx)$/.test(entry.name)) {
      return [fullPath];
    }
    return [];
  });
}

function validateFile(filePath) {
  const relativePath = path.relative(contentRoot, filePath).replaceAll(path.sep, '/');
  const parsed = matter.read(filePath);
  const errors = [];

  for (const field of requiredFields) {
    if (parsed.data[field] === undefined) {
      errors.push(`missing "${field}"`);
    }
  }

  if (parsed.data.type && !validTypes.has(parsed.data.type)) {
    errors.push(`invalid type "${parsed.data.type}"`);
  }

  if (parsed.data.status && !validStatuses.has(parsed.data.status)) {
    errors.push(`invalid status "${parsed.data.status}"`);
  }

  if (parsed.data.visibility && !validVisibility.has(parsed.data.visibility)) {
    errors.push(`invalid visibility "${parsed.data.visibility}"`);
  }

  if (parsed.data.tags !== undefined && !Array.isArray(parsed.data.tags)) {
    errors.push('"tags" must be an array');
  }

  if (parsed.data.source_refs !== undefined && !Array.isArray(parsed.data.source_refs)) {
    errors.push('"source_refs" must be an array');
  }

  return errors.map((error) => `${relativePath}: ${error}`);
}

const files = collectMarkdownFiles(contentRoot);
const errors = files.flatMap(validateFile);

if (errors.length > 0) {
  console.error('Wiki metadata validation failed:');
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(`Validated metadata for ${files.length} wiki pages.`);
