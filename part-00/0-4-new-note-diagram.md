## 0.4 - new note diagram

```mermaid
sequenceDiagram
    participant User
    participant Browser 
    participant Server
    User->>Browser: Fill out the form (input data)
    User->>Browser: Click submit button
    Browser->>Server: POST /new_note (form data)
    activate Server
    Server->>Browser: 302 Redirect (Location: /notes)
    deactivate Server
    Browser->>Server: GET /notes
    activate Server
    Server-->>Browser: HTML document
    deactivate Server
    Browser->>Server: GET /main.css
    activate Server
    Server-->>Browser: main.css
    deactivate Server
    Browser->>Server: GET /main.js
    activate Server
    Server-->>Browser: main.js
    deactivate Server
    Browser->>Server: GET /data.json
    activate Server
    Server-->>Browser: data.json
    deactivate Server
    
```