const {
  generateOpportunityCandidates,
  importRecords,
  scoreOpportunities,
  validateAll,
} = require('./core');

class StructuredRecordAgent {
  constructor({ root } = {}) {
    this.root = root;
  }

  writeInboxRecord(entityType, record) {
    return importRecords(entityType, [record], { root: this.root });
  }
}

class CustomerResearchAgent extends StructuredRecordAgent {
  submitCustomerCandidate(record) {
    return this.writeInboxRecord('customers', record);
  }

  submitContactCandidate(record) {
    return this.writeInboxRecord('contacts', record);
  }

  submitPlantCandidate(record) {
    return this.writeInboxRecord('plants', record);
  }
}

class TenderResearchAgent extends StructuredRecordAgent {
  submitTenderCandidate(record) {
    return this.writeInboxRecord('tenders', record);
  }
}

class MarketSignalAgent extends StructuredRecordAgent {
  submitMarketSignalCandidate(record) {
    return this.writeInboxRecord('market_signals', record);
  }
}

class VerificationAgent extends StructuredRecordAgent {
  validateRecords(options = {}) {
    return validateAll({ ...options, root: this.root });
  }
}

class OpportunityGenerationAgent extends StructuredRecordAgent {
  generateCandidates() {
    return generateOpportunityCandidates({ root: this.root });
  }

  scoreCandidates() {
    return scoreOpportunities({ root: this.root });
  }
}

module.exports = {
  CustomerResearchAgent,
  MarketSignalAgent,
  OpportunityGenerationAgent,
  StructuredRecordAgent,
  TenderResearchAgent,
  VerificationAgent,
};
