import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/2024-MUL-3sem-frontend",
  plugins: [TanStackRouterVite(), react()],
});
