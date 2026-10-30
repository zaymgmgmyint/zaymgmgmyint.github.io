---
type: snippet
title: Nginx reverse proxy to an app
tags: [Nginx]
language: nginx
code: |
  server {
    listen 80;
    server_name example.com;

    location / {
      proxy_pass http://127.0.0.1:8080;
      proxy_set_header Host $host;
      proxy_set_header X-Real-IP $remote_addr;
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_set_header X-Forwarded-Proto $scheme;
    }
  }
---
Forwards requests to an app on port 8080 and passes the original host and client address along.
