import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'cli/cli': 'src/cli/cli.ts',
  },
  format: ['esm', 'cjs'],
  dts: {
    // Only emit type declarations for the public library entry
    entry: { index: 'src/index.ts' },
  },
  clean: true,
  shims: true, // Transforms import.meta.url → __dirname in CJS output
  outDir: 'dist',
})
