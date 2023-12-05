import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from '@svgr/rollup';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(),react()],
  server: {
    port: 3030
  },
  preview: {
    port: 8080
  }
  /* esbuild: {
    jsxInject: `import React, { useState, useEffect } from react'
    `
  }, */
  /* optimizeDeps: {
    include: ['linked-dep']
  },
  dev: {
    commonjsOptions: {
      include: [/linked-dep/, /node_modules/]
    }
  } */
  
})
