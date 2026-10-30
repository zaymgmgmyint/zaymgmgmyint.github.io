---
type: snippet
title: Latest row per group in PostgreSQL
tags: [SQL, PostgreSQL]
language: sql
code: |
  SELECT DISTINCT ON (device_id)
         device_id, status, created_at
  FROM device_events
  ORDER BY device_id, created_at DESC;
---
Returns the most recent event for each device. `DISTINCT ON` keeps the first row per `device_id` in the sort order.
