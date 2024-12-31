import { ConfigEnv, defineConfig } from 'vite';
import { federation } from '@module-federation/vite';

import react from '@vitejs/plugin-react';

import { dependencies } from './package.json';
import { defineCommonConfig } from 'react-microfrontend-common';

export default defineConfig(({ mode }) => {
	const { base } = defineCommonConfig(mode);

	return {
		...base,
		plugins: [
			federation({
				filename: 'remoteEntry.js',
				name: 'store',
				exposes: {
					'./store': './src/store',
				},
				shared: {
					react: {
						requiredVersion: dependencies.react,
						singleton: true,
					},
					jotai: {
						singleton: true,
					},
				},
			}),
			react(),
		],
	};
});
