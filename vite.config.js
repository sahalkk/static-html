import { defineConfig } from "vite";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default defineConfig({
  base: "/km-properties-landing/",
  plugins: [],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: "dist",
    minify: true,
    cssMinify: true,
    assetsDir: "",
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].[hash].js`,
        chunkFileNames: `assets/[name].[hash].js`,
        assetFileNames: `[name].[hash].[ext]`,
      },
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
});
