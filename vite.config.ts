import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Chemins relatifs : le site fonctionne sur GitHub Pages quel que soit
  // le nom définitif du dépôt.
  base: "./",
});
