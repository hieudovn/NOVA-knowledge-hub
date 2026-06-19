# Tech Knowledge Base Scope: APM & IIoT Solutions

## 1. Purpose

This document defines the first real knowledge domain for NOVA Knowledge Hub.

The initial Tech Knowledge Base will be built from the Google Drive folder:

`APM & IIoT Solutions`

This folder contains solution materials for the APM and IIoT portfolio currently managed by Hieu.

The Tech Knowledge Base will later be combined with IBM Maximo Application Suite knowledge to form the core Avenue industrial solution knowledge base.

Business knowledge will be built later.

---

## 2. Initial Source Domain

Primary source folder:

- Google Drive folder: APM & IIoT Solutions
- Folder ID: `1Jqc5baQrXENomrDRxEpaIy6QhkNrYIvw`

Observed top-level sources:

- AVENUE APM & IIoT Solutions
- APM & IIoT Solutions Pricing Structure
- AI PlantOps
- Luca BDS
- AVEVA APM
- Litmus Edge
- EtaPRO
- AVEVA PI
- Retina360
- Canary
- IDBoxRT

---

## 3. Initial Solution Portfolio

### Current APM & IIoT portfolio

- IDBoxRT
- EtaPRO APM
- Canary
- LUCA BDS
- AVEVA PI System
- AI PlantOps
- Retina360
- AVEVA APM
- Litmus Edge

### Related Avenue portfolio to add

- IBM Maximo Application Suite
- IBM MAS Manage
- IBM MAS Monitor
- IBM MAS Health
- IBM MAS Predict
- IBM MAS APM / Reliability use cases

### Future additions

The portfolio model must allow new solutions to be added without changing the architecture.

---

## 4. Tech Knowledge Base Content Types

The Tech Knowledge Base should prioritize technical and solution knowledge, not business memory yet.

Initial page types:

- Solution Page
- Capability Page
- Integration Pattern Page
- Architecture Pattern Page
- Comparison Page
- Tender Compliance Note
- Technical Proposal Note
- Use Case Page
- Industry Fit Page

---

## 5. Core Technical Taxonomy

### Solution Categories

- APM
- IIoT Platform
- Industrial Data Historian
- Operational Intelligence
- Business Intelligence
- AI/ML Analytics
- Edge Platform
- Process Optimization
- Asset Management

### Capabilities

- Real-time data acquisition
- Time-series storage
- Data contextualization
- Condition monitoring
- Performance monitoring
- Predictive maintenance
- Anomaly detection
- Energy monitoring
- Reporting and dashboarding
- Integration with SCADA/DCS/PLC
- Integration with ERP/EAM/CMMS
- On-premise deployment
- Edge collection
- Store and forward
- AI/ML analytics

### Integration Targets

- SCADA
- DCS
- PLC
- Historian
- ERP
- SAP
- Maximo
- CMMS/EAM
- MES
- LIMS
- GIS
- OPC UA
- MQTT
- REST API
- Database

---

## 6. Initial Wiki Structure

Recommended initial wiki structure:

```text
wiki/
  solutions/
    idboxrt.md
    etapro.md
    canary.md
    aveva-pi.md
    ai-plantops.md
    retina360.md
    luca-bds.md
    aveva-apm.md
    litmus-edge.md
    ibm-mas.md

  capabilities/
    apm.md
    iiot-platform.md
    data-historian.md
    operational-intelligence.md
    predictive-maintenance.md
    condition-monitoring.md
    performance-monitoring.md
    edge-data-collection.md

  patterns/
    historian-to-apm.md
    edge-to-center.md
    opc-ua-integration.md
    mqtt-sparkplug-integration.md
    maximo-integration.md
    scada-dcs-data-ingestion.md

  comparisons/
    canary-vs-aveva-pi.md
    idboxrt-vs-historian.md
    etapro-vs-mas-apm.md
    apm-solution-landscape.md

  tender/
    apm-iiot-compliance-notes.md
    historian-requirement-mapping.md
    apm-requirement-mapping.md
```

---

## 7. Extraction Priorities

### Priority 1

Build solution overview pages for:

- IDBoxRT
- EtaPRO
- Canary
- AVEVA PI
- IBM MAS

### Priority 2

Build capability pages for:

- APM
- IIoT Platform
- Data Historian
- Condition Monitoring
- Performance Monitoring
- Predictive Maintenance

### Priority 3

Build integration and architecture pattern pages:

- Historian to APM
- Edge to Center
- OPC UA integration
- MQTT/Sparkplug integration
- Maximo integration

### Priority 4

Build comparison pages:

- Canary vs AVEVA PI
- EtaPRO vs IBM MAS APM
- IDBoxRT vs traditional historian

---

## 8. Source Handling Rules

1. Do not centralize all raw files into the repository.
2. Store source metadata and Drive pointers in the source registry.
3. Treat pricing documents as restricted by default.
4. Treat vendor confidential documents as restricted unless approved.
5. Use AI output only as draft.
6. Approved wiki pages are the operational knowledge layer.

---

## 9. Relationship to Business Knowledge

Business Knowledge is out of scope for this phase.

Examples of future Business Knowledge:

- customer preferences
- sales meeting notes
- opportunity lessons
- proposal strategy
- won/lost analysis
- pricing strategy
- partner strategy

These will be added later, likely from NOVA notes and sales/presales activity.

---

## 10. Success Criteria

This Tech Knowledge Base phase is successful when:

1. Source registry includes the APM & IIoT folder and top-level solution folders.
2. At least five core solution pages exist as draft or approved wiki pages.
3. At least five capability pages exist.
4. At least three architecture/integration patterns exist.
5. A future AI assistant can answer basic solution and capability questions from approved knowledge.
