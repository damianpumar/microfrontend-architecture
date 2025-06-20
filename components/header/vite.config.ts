import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

import { defineCommonConfig, federation } from 'vite-microfrontend/vite';

export default defineConfig(({ mode }) => {
	const { base } = defineCommonConfig(mode);

	return {
		...base,
		plugins: [
			federation({
				mode,
				name: 'header',
				exposes: {
					'./header': './src/components/Header.tsx',
				},
			}),
			react(),
		],
	};
});
