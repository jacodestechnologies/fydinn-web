// Local dev entrypoint. On Vercel the same app is served from /api/index.js.
import app from "./app.js";
import { apiConfigured } from "./meantgo.js";

const PORT = process.env.PORT || 5174;

app.listen(PORT, () => {
  console.log(`[admin-api] listening on http://localhost:${PORT}`);
  if (!apiConfigured()) {
    console.log("[admin-api] MEANTGO_ADMIN_TOKEN not set — monitoring endpoints will return 503.");
  }
});
