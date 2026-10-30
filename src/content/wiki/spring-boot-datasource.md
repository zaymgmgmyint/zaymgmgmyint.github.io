---
type: snippet
title: Spring Boot PostgreSQL datasource
tags: [Spring Boot, PostgreSQL]
language: yaml
code: |
  spring:
    datasource:
      url: jdbc:postgresql://localhost:5432/appdb
      username: app
      password: ${DB_PASSWORD}
    jpa:
      hibernate:
        ddl-auto: validate
      open-in-view: false
---
The password comes from an environment variable. `validate` checks the schema without changing it, and turning off `open-in-view` keeps database sessions out of the web layer.
