## 0.5 - single page app diagram

```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant Server
    User->>Browser: Access https://studies.cs.helsinki.fi/exampleapp/spa
    Browser->>Server: GET /exampleapp/spa
    activate Server
    Server->>Browser: index.html
    deactivate Server
    Browser->>Server: GET /main.js
    activate Server
    Server->>Browser: main.js
    deactivate Server
    Browser->>Server: GET /styles.css
    activate Server
    Server->>Browser: styles.css
    deactivate Server
    Browser->>Server: GET /data.json
    activate Server
    Server-->>Browser: data.json
    deactivate Server
    Browser->>User: Render app with notes

```
