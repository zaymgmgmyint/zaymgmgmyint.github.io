---
type: snippet
title: Test an MQTT topic from the shell
tags: [MQTT]
language: bash
code: |
  # Listen to every device's status topic
  mosquitto_sub -h localhost -p 1883 -t 'devices/+/status' -v

  # Publish a test message
  mosquitto_pub -h localhost -p 1883 -t 'devices/cam-01/status' -m '{"online":true}'
---
Uses the Mosquitto command-line clients. The `+` is a single-level wildcard, so the subscriber sees every device.
