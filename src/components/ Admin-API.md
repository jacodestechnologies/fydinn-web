# Fydinn Admin API

A token-authenticated JSON API for building external admin tooling (e.g. a
React admin dashboard) on top of Fydinn.

- **Base URL (local):** `https://fydinn.up.railway.app`
- **Prefix:** all admin endpoints live under `/admin`
- **Content type:** `application/json`
- **CORS:** enabled for all origins. Authentication is by token, not by origin,
  so cross-origin browser clients work without extra configuration.

---

## 1. Response envelope

Every endpoint returns a consistent envelope.

**Success**

```json
{
  "status": "success",
  "data": {}
}
```

**Error**

```json
{
  "status": "error",
  "message": "Human-readable reason"
}
```

| HTTP  | Meaning                                      |
| ----- | -------------------------------------------- |
| `200` | OK                                           |
| `401` | Missing, expired, or invalid token           |
| `422` | Request body failed validation               |
| `503` | Admin access is not configured on the server |

---

## 2. Authentication

Authentication is a two-step flow: exchange the shared admin token for a
short-lived **Bearer JWT**, then send that JWT on every request.

### 2.1 Obtain a token — `POST /admin/login`

**Request body**

```json
{ "token": "your-admin-token" }
```

| Field   | Type   | Required | Notes                                        |
| ------- | ------ | -------- | -------------------------------------------- |
| `token` | string | yes      | The shared admin token issued to your client |

**Success — `200`**

```json
{
  "status": "success",
  "data": {
    "token": "<jwt>",
    "tokenType": "Bearer",
    "expiresIn": 43200
  }
}
```

| Field            | Type   | Notes                                       |
| ---------------- | ------ | ------------------------------------------- |
| `data.token`     | string | JWT to send as a Bearer token               |
| `data.tokenType` | string | Always `"Bearer"`                           |
| `data.expiresIn` | number | Token lifetime in **seconds** (12h = 43200) |

**Errors**

- `401` — `{ "status": "error", "message": "Invalid admin token" }`
- `503` — `{ "status": "error", "message": "Admin access is not configured (ADMIN_TOKEN unset)" }`

### 2.2 Authenticated requests

Send the JWT on every data endpoint:

```
Authorization: Bearer <jwt>
```

A missing, expired, or invalid token returns:

```json
HTTP 401
{ "status": "error", "message": "Admin authentication required" }
```

On `401`, call `POST /admin/login` again to obtain a fresh token. Tokens are
stateless and short-lived; there is no refresh endpoint and no server-side
logout — to "log out", discard the token in your client.

---

## 3. Endpoints

### 3.1 `GET /admin/health`

Liveliness **and** activeness of the major functional sections, plus core
infrastructure.

**Auth:** required · **Query:** none

**Response — `data`**

```json
{
  "checkedAt": "2026-06-09T12:00:00.000Z",
  "core": {
    "server": { "ok": true, "uptimeSeconds": 1234.5 },
    "database": { "ok": true, "latencyMs": 3, "error": null },
    "redis": { "ok": true, "latencyMs": 1, "error": null }
  },
  "sections": [
    {
      "key": "intent_messaging",
      "name": "Intent & Messaging",
      "description": "Intent requests, inbox delivery, quotas, moderation and conversations.",
      "icon": "message-square",
      "status": "degraded",
      "dependencies": [
        {
          "name": "intent_requests table",
          "type": "postgres",
          "ok": true,
          "latencyMs": 4,
          "detail": "12 rows"
        },
        {
          "name": "conversations table",
          "type": "postgres",
          "ok": true,
          "latencyMs": 3,
          "detail": "5 rows"
        },
        {
          "name": "messages table",
          "type": "postgres",
          "ok": true,
          "latencyMs": 3,
          "detail": "40 rows"
        },
        {
          "name": "Redis inbox / quota store",
          "type": "redis",
          "ok": true,
          "latencyMs": 1,
          "detail": "PONG"
        }
      ],
      "routes": [
        {
          "method": "GET",
          "path": "/v1/intents/inbox",
          "status": "down",
          "httpStatus": 404,
          "latencyMs": 2,
          "note": "Route not registered"
        },
        {
          "method": "POST",
          "path": "/v1/intents/send",
          "status": "down",
          "httpStatus": 404,
          "latencyMs": 2,
          "note": "Route not registered"
        }
      ],
      "metrics": [
        { "label": "Pending intents", "value": 12 },
        { "label": "Active conversations", "value": 5 },
        { "label": "Messages", "value": 40 }
      ]
    },
    {
      "key": "discovery_explore",
      "name": "Discovery & Explore",
      "description": "Discovery pool ranking and the explore feed with mode/interest filters.",
      "icon": "compass",
      "status": "operational",
      "dependencies": [
        {
          "name": "Discovery pool",
          "type": "redis",
          "ok": true,
          "latencyMs": 1,
          "detail": "320 members"
        },
        {
          "name": "Redis explore cache",
          "type": "redis",
          "ok": true,
          "latencyMs": 1,
          "detail": "PONG"
        },
        {
          "name": "Explore-visible users",
          "type": "postgres",
          "ok": true,
          "latencyMs": 5,
          "detail": "280 rows"
        }
      ],
      "routes": [
        {
          "method": "GET",
          "path": "/v1/feed/discovery",
          "status": "alive",
          "httpStatus": 401,
          "latencyMs": 6,
          "note": "Alive — authentication required"
        },
        {
          "method": "GET",
          "path": "/v1/feed/explore",
          "status": "alive",
          "httpStatus": 401,
          "latencyMs": 5,
          "note": "Alive — authentication required"
        }
      ],
      "metrics": [
        { "label": "Discovery pool size", "value": 320 },
        { "label": "Explore-visible users", "value": 280 },
        { "label": "Cached explore pages", "value": 8 }
      ]
    }
  ],
  "summary": { "operational": 1, "degraded": 1, "down": 0 }
}
```

**Field reference**

| Path                               | Type             | Meaning                                                                    |
| ---------------------------------- | ---------------- | -------------------------------------------------------------------------- |
| `checkedAt`                        | string           | ISO timestamp of the check                                                 |
| `core.server.ok`                   | boolean          | Process is serving                                                         |
| `core.server.uptimeSeconds`        | number           | Process uptime                                                             |
| `core.{database,redis}.ok`         | boolean          | Dependency reachable                                                       |
| `core.{database,redis}.latencyMs`  | number           | Probe latency                                                              |
| `core.{database,redis}.error`      | string \| null   | Error message when `ok=false`                                              |
| `sections[].key`                   | string           | Stable identifier                                                          |
| `sections[].status`                | enum             | `operational` \| `degraded` \| `down`                                      |
| `sections[].dependencies[].type`   | enum             | `postgres` \| `redis`                                                      |
| `sections[].dependencies[].ok`     | boolean          | Dependency healthy                                                         |
| `sections[].dependencies[].detail` | string           | Row/member count or error text                                             |
| `sections[].routes[].status`       | enum             | `alive` (responds) \| `degraded` (5xx) \| `down` (unreachable / not found) |
| `sections[].routes[].httpStatus`   | number \| null   | Observed status (`null` = no response)                                     |
| `sections[].metrics[].value`       | number \| string | Activeness metric                                                          |
| `summary`                          | object           | Count of sections per status                                               |

**How section status is derived:**

- `down` — a dependency is unreachable, **or** every route is `down`.
- `degraded` — any route is not `alive`, **or** an activeness signal is empty
  (e.g. discovery pool has 0 members).
- `operational` — all dependencies healthy, all routes alive, activeness OK.

> A route `status` of `alive` with `httpStatus` `401` is expected and healthy —
> it means the underlying user-facing route is registered and responding behind
> its own authentication.

---

### 3.2 `GET /admin/metrics`

Runtime, memory and environment of the API process.

**Auth:** required · **Query:** none

**Response — `data`**

```json
{
  "uptimeSeconds": 1234.5,
  "memory": { "rss": 167772160, "heapUsed": 50331648, "heapTotal": 67108864 },
  "runtime": { "bun": "1.1.0", "platform": "darwin", "arch": "arm64", "env": "local" },
  "logging": {
    "library": "tsuki-logger/elysia",
    "level": "debug",
    "autoLogging": true,
    "logErrors": true,
    "requestId": "crypto.randomUUID() per request",
    "appliesTo": "all registered routes"
  }
}
```

| Field                             | Type   | Notes                  |
| --------------------------------- | ------ | ---------------------- |
| `uptimeSeconds`                   | number | Process uptime         |
| `memory.{rss,heapUsed,heapTotal}` | number | Bytes                  |
| `runtime.bun`                     | string | Runtime version        |
| `runtime.env`                     | string | Deployment environment |

---

### 3.3 `GET /admin/users`

Paginated users with their authentication (OTP) state.

**Auth:** required

**Query parameters**

| Param    | Type   | Default | Range     |
| -------- | ------ | ------- | --------- |
| `limit`  | number | `100`   | `1`–`250` |
| `offset` | number | `0`     | `>= 0`    |

**Response — `data`**

```json
{
  "total": 526,
  "limit": 100,
  "offset": 0,
  "users": [
    {
      "id": "0190a1b2-...",
      "phone": "+2348012345678",
      "phoneVerifiedAt": "2026-05-01T10:00:00.000Z",
      "firstName": "Ada",
      "lastName": "Obi",
      "accountStatus": "active",
      "onboardingStep": 12,
      "lastActiveAt": "2026-06-08T09:00:00.000Z",
      "createdAt": "2026-04-20T08:00:00.000Z",
      "otp": {
        "code": "123456",
        "codeKey": "auth:otp:+2348012345678",
        "codeTtlSeconds": 240,
        "expiresAt": "2026-06-09T12:04:00.000Z",
        "sendAttempts": 1,
        "sendAttemptsKey": "otp:send-attempts:+2348012345678",
        "sendWindowTtlSeconds": 3500,
        "verifyAttempts": 0,
        "verifyAttemptsKey": "otp:verify-attempts:+2348012345678",
        "verifyWindowTtlSeconds": 0,
        "limits": {
          "otpExpirySeconds": 300,
          "maxSendAttempts": 3,
          "sendWindowSeconds": 3600,
          "maxVerifyAttempts": 5,
          "verifyWindowSeconds": 300
        },
        "visibility": "Redis-stored OTP generated by this API."
      }
    }
  ]
}
```

| Field                        | Type           | Notes                                       |
| ---------------------------- | -------------- | ------------------------------------------- |
| `total`                      | number         | Total user count (not page size)            |
| `limit` / `offset`           | number         | Echo of the applied pagination              |
| `users[].phoneVerifiedAt`    | string \| null | ISO timestamp or `null`                     |
| `users[].accountStatus`      | string         | e.g. `active`, `deactivated`                |
| `users[].onboardingStep`     | number         | Onboarding progress index                   |
| `users[].otp.code`           | string \| null | Active OTP, or `null`                       |
| `users[].otp.codeTtlSeconds` | number         | Seconds until the code expires (`0` = none) |
| `users[].otp.limits`         | object         | Configured rate limits                      |
| `users[].otp.visibility`     | string         | Why a code is/isn't present                 |

---

## 4. Integration guide (React / SPA)

1. **Configure** the API base URL (e.g. `VITE_ADMIN_API=http://localhost:5000`).
2. **Login:** `POST {base}/admin/login` with `{ token }`. Store `data.token`;
   use `expiresIn` to pre-empt expiry.
3. **Authorize:** attach `Authorization: Bearer <token>` to every request.
4. **Handle 401:** clear the stored token and return to your login screen, then
   re-login for a fresh token.
5. **Logout:** discard the token in your client.

```ts
// Minimal client
const BASE = import.meta.env.VITE_ADMIN_API;
let token: string | null = sessionStorage.getItem("admin_jwt");

export async function login(adminToken: string) {
  const res = await fetch(`${BASE}/admin/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token: adminToken }),
  });
  if (!res.ok) throw new Error("login_failed");
  const { data } = await res.json();
  token = data.token;
  sessionStorage.setItem("admin_jwt", token!);
}

export async function adminGet<T>(path: string): Promise<T> {
  const res = await fetch(`${BASE}${path}`, {
    headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
  });
  if (res.status === 401) {
    sessionStorage.removeItem("admin_jwt");
    throw new Error("unauthorized"); // redirect to login
  }
  const { data } = await res.json();
  return data as T;
}

// usage
const health = await adminGet("/admin/health");
const users = await adminGet("/admin/users?limit=100&offset=0");
```
