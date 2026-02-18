import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  clean: true,

  // CRÍTICO
  external: ['react', 'react-dom', 'lucide-react'],

  esbuildOptions: (options) => {
    options.jsx = 'automatic';
    return options;
  },
});
