---
type: snippet
title: Run PostgreSQL with Docker Compose
tags: [Docker, PostgreSQL]
language: yaml
code: |
  services:
    db:
      image: postgres:16
      environment:
        POSTGRES_USER: app
        POSTGRES_PASSWORD: change-me
        POSTGRES_DB: appdb
      ports:
        - "5432:5432"
      volumes:
        - pgdata:/var/lib/postgresql/data

  volumes:
    pgdata:
---
A local database that keeps its data between restarts. Replace the password, and don't publish the port on a public server.
