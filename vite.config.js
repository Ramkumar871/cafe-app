import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/cafe-app/", // e.g. "/cafe-app/" or "/Cafe-app-using-react-main/"
});
