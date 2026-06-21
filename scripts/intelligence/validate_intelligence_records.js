const { parseArgs, validateAll } = require('./core');

const args = parseArgs(process.argv);
const issues = validateAll({
  now: args.now,
  maxAgeDays: args.maxAgeDays ? Number(args.maxAgeDays) : 365,
});

if (issues.length > 0) {
  console.error('Intelligence validation failed:');
  for (const issue of issues) {
    console.error(`- ${issue.store}/${issue.entityType}/${issue.id}: ${issue.error}`);
  }
  process.exit(1);
}

console.log('Intelligence records passed validation.');
