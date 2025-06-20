import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

import packageJson from './package.json' with { type: 'json' };
import { defineCommonConfig, federation } from 'vite-microfrontend/vite';

export default defineConfig(({ mode }) => {
	const { base } = defineCommonConfig(mode);

	return {
		...base,
		plugins: [
			federation({
				mode,
				name: 'host',
				exposes: {},
			}),
			react(),
		],
	};
});
