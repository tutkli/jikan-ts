await Bun.build({
	entrypoints: ['./src/index.ts', './src/types.ts', './src/client.ts'],
	outdir: './dist',
	splitting: true,
	external: ['ky'],
	sourcemap: 'none',
	format: 'esm',
	target: 'node',
	minify: true
})
