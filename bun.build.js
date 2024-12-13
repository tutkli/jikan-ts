import dts from 'bun-plugin-dts'

await Bun.build({
	entrypoints: ['./src/index.ts'],
	outdir: './dist',
	splitting: true,
	external: ['axios', 'axios-cache-interceptor'],
	sourcemap: 'none',
	format: 'esm',
	target: 'node',
	minify: true,
	plugins: [dts()]
})
