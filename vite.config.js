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
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;

          if (id.includes("react") || id.includes("react-dom") || id.includes("react-router-dom")) {
            return "vendor-react";
          }

          if (id.includes("firebase")) {
            return "vendor-firebase";
          }

          if (id.includes("quill") || id.includes("react-quill")) {
            return "vendor-editor";
          }

          if (id.includes("lottie-web")) {
            return "vendor-lottie";
          }

          if (id.includes("aos") || id.includes("react-scroll-parallax") || id.includes("@material-tailwind")) {
            return "vendor-ui";
          }

          return "vendor-misc";
        },
      },
    },
  },
});
