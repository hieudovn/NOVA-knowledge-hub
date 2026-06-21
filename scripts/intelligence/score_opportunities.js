const { scoreOpportunities } = require('./core');

const opportunities = scoreOpportunities();
console.log(`Scored ${opportunities.length} inbox opportunity record(s).`);
