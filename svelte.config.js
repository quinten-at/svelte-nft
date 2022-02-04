import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import nodePolyfills from 'rollup-plugin-polyfill-node'
import { Buffer } from 'buffer';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		scss: {
			prependData: `@import src/styles/global.scss;`,
			outputStyle: 'compressed'
		}
	}),

	kit: {
		adapter: adapter(),
		vite: {
			server: {
				fs: {
					allow: ['data']
				}
			},
			define: {
				// 'process.env': {},
				// global: 'window',
				// Buffer: Buffer,
				// plugins: [nodePolyfills()]
			}
		}
	}
};

export default config;
