import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
    // Optional: Use strictPort to prevent Vite from automatically
    // trying the next available port if 3000 is taken.
    strictPort: true,
  },
});
