import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer';
import postcssPresetEnv from 'postcss-preset-env';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      // Options for CSS Modules
      localsConvention: 'camelCaseOnly',
    },
    postcss: {
      plugins: [
        autoprefixer(),
        postcssPresetEnv({ browsers: 'last 2 versions' }),
      ],
    },
  },
})
