import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  server: {
    proxy: {
      // Admin dashboard talks to the local admin backend (server/index.js).
      "/api": { target: "http://localhost:5174", changeOrigin: true },
    },
  },
});
