# API Conventions

## REST Endpoints
- Use plural nouns: `/api/meals`, `/api/users`
- Use HTTP verbs correctly: GET (read), POST (create), PUT (replace), PATCH (update), DELETE (remove)
- Use kebab-case for URLs: `/api/meal-plans`
- Version APIs: `/api/v1/meals`

## Response Format
```json
{
  "data": {},
  "meta": { "page": 1, "total": 100 },
  "error": null
}
```

## Error Responses
```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Human-readable description",
    "details": []
  }
}
```

## Status Codes
- 200: Success
- 201: Created
- 400: Bad request (validation)
- 401: Unauthorized
- 403: Forbidden
- 404: Not found
- 500: Server error

## Auth
- Use Bearer tokens in Authorization header
- Never expose secrets in URLs or logs
- Validate and sanitize all input at the boundary
