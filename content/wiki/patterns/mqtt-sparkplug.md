---
title: MQTT Sparkplug
type: pattern
status: draft
visibility: private
owner: Hieu Do
organization: Personal
tags:
  - mqtt
  - sparkplug
  - iiot
source_refs:
  - source_id: SRC-DOMAIN-APM-IIOT
    title: APM & IIoT Solutions
landing_candidate: false
confidence: low
last_reviewed: null
reviewed_by: null
---

# MQTT Sparkplug

## Summary

MQTT Sparkplug is a draft pattern for event-driven IIoT data movement using MQTT and Sparkplug-style payload conventions where appropriate.

## Purpose

Provide a reusable structure for discussing MQTT-based data publishing, subscription, and topic organization for industrial data movement.

## When to Use

- An architecture requires publish/subscribe data movement.
- Edge nodes or gateways need to publish operational data to a broker.
- Tender requirements mention MQTT, Sparkplug, IIoT messaging, or event-driven integration.

## Architecture Flow

```text
Edge node
  -> MQTT broker
  -> Subscriber applications
  -> Historian / IIoT platform / analytics
```

## Inputs

- Source data from equipment, gateway, platform, or edge node.
- Topic namespace and payload conventions.
- Broker endpoint, security settings, and access control.
- Subscriber requirements for historian, platform, monitoring, or analytics systems.

## Outputs

- Published messages for downstream subscribers.
- Topic and payload mapping for operations data.
- Clarification points for quality, retained messages, and connectivity behavior.

## Common Risks

- MQTT may be named in tenders without clear payload or namespace requirements.
- Broker ownership, security, and network placement may be unclear.
- Subscribers may require different payload structures or data quality handling.
- Sparkplug conventions may be expected but not explicitly specified.

## Related Solutions

- [IDBoxRT](../solutions/idboxrt)
- [Litmus Edge](../solutions/litmus-edge)
- [AI PlantOps](../solutions/ai-plantops)

## Related Capabilities

- [IIoT Platform](../capabilities/iiot-platform)
- [Industrial Historian](../capabilities/industrial-historian)

## Tender Notes

- Ask whether MQTT alone is required or whether Sparkplug conventions are specifically expected.
- Clarify publisher, broker, subscriber, payload, namespace, and security responsibilities.
- Avoid claiming support for MQTT or Sparkplug until reviewed solution evidence is attached.

## Source Traceability

Current content is a draft pattern based on the registered APM & IIoT solution domain. Validate protocol support and architecture details against solution source materials before approval.

## Review Notes

- Add source-backed examples after reviewing edge and IIoT solution materials.
- Keep this page as a messaging pattern, not a final reference architecture.

## Related Pattern Pages

- [Edge to Center](./edge-to-center)
- [SCADA/DCS Data Ingestion](./scada-dcs-data-ingestion)
