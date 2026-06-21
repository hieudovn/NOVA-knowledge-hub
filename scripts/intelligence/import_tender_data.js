const { importRecords, parseArgs, readInputRecords } = require('./core');

const args = parseArgs(process.argv);
const result = importRecords('tenders', readInputRecords(args.file));

console.log(`Imported ${result.imported.length} tender record(s) into Intelligence Inbox.`);
if (result.errors.length > 0) {
  console.error(JSON.stringify(result.errors, null, 2));
  process.exit(1);
}
