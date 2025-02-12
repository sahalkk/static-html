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
    assetsInlineLimit: 0,
    rollupOptions: {
      input: {
        main: "./index.html",
      },
      output: {
        entryFileNames: `assets/[name].[hash].js`,
        chunkFileNames: `assets/[name].[hash].js`,
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split(".");
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name].[hash].[ext]`;
          }
          if (ext === "css") {
            return `[name].[hash].[ext]`;
          }
          return `assets/[name].[hash].[ext]`;
        },
      },
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
});
