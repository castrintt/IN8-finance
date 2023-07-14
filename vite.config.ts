import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@service": "/business/service",
      "@entities": "/business/domain/entities",
      "@enums": "/business/domain/enums",
      "@config": "/config",
      "@utils": "/utils",
      "@assets": "/src/App/Assets",
      "@components": "/src/App/Components",
      "@pages": "/src/App/Pages",
      "@routes": "/src/App/Routes",
      "@store": "/src/App/Store",
    },
  },
});
