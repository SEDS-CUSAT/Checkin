# Checkin

- [x] interface for scanning a QR
- [x] Implement basic get/post request
- [ ] fetch user data from database
- [ ] add attendee to event attendee database
- [ ] check for both seds members as well as other attendees

## Entry points:

### `/checkin`

page where QR scanner and verification details are displayed. This page can send POST request to `/verify` with checkin ID..: JSON structure:
```json 
{ "id": <number/string> }
```

### `/verify`

Node where details are verified. Reads `id` field of request body and checks it. returns whether id exists or not..
returns the json: 
```json
{ "exists": <boolean> }
```