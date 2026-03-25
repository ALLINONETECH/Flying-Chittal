import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import copy from "rollup-plugin-copy";

export default defineConfig({
  plugins: [
    react({
      babel: {
        compact: false, // Disable Babel compact mode
      },
    }),
    tailwindcss(),
    copy({
      targets: [
        { src: "./google6ebf00cf48057182.html", dest: "dist" },
        { src: "./robots.txt", dest: "dist" },
        { src: "./sitemap.xml", dest: "dist" },
      ],
      hook: "writeBundle", // Ensures files are copied after the bundle is written
    }),
  ],
});
