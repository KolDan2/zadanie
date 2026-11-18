import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" sprawia, że strona działa też na GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: "./",
});
