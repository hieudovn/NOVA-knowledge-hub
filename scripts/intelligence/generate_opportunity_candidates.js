const { generateOpportunityCandidates } = require('./core');

const candidates = generateOpportunityCandidates();
console.log(`Generated ${candidates.length} opportunity candidate(s) into Intelligence Inbox.`);
