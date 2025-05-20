import { defineConfig } from 'vite';
import { federation } from '@module-federation/vite';

import react from '@vitejs/plugin-react';

import packageJson from './package.json' with { type: 'json' };
import { defineCommonConfig } from 'react-microfrontend-common/vite';

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
						requiredVersion: packageJson.dependencies.react,
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
