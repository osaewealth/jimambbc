import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Prerender from "vite-plugin-prerender";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Prerender({
      staticDir: "dist", // where Vite builds
      routes: ["/", "/about", "/contact", "/portfolio"],
    }),
  ],
  assetsInclude: ["**/*.JPG"],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
