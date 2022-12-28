import { build } from 'esbuild';
import { nodeExternalsPlugin } from 'esbuild-node-externals';

build({
  entryPoints: ['src/index.ts'],
  outfile: 'dist/index.js',
  platform: 'node',
  bundle: true,
  minify: true,
  format: 'esm',
  globalName: 'jikants',
  loader: { '.ts': 'ts' },
  tsconfig: 'tsconfig.json',
  plugins: [nodeExternalsPlugin()],
})
  .then(() => console.log('⚡ Done'))
  .catch(() => process.exit(1));
