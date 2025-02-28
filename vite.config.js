import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    cssCodeSplit: false, // Force la génération d'un seul fichier CSS
  },
  theme: {
    extend: {
      colors: {
        beige: "#f5f5dc",
      },
    },
  },
});
