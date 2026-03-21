await Bun.build({
	entrypoints: ['./src/index.ts', './src/types.ts', './src/client.ts'],
	outdir: './dist',
	splitting: true,
	external: ['axios', 'axios-cache-interceptor'],
	sourcemap: 'none',
	format: 'esm',
	target: 'node',
	minify: true
})
