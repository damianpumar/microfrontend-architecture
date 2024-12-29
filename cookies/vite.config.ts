import { defineConfig } from 'vite';
import { federation } from '@module-federation/vite';

import react from '@vitejs/plugin-react';

import { dependencies } from './package.json';
import { defineCommonConfig } from '../vite.config.common';

export default defineConfig(({ mode }) => {
	const { remotes, base } = defineCommonConfig(mode);

	return {
		...base,
		plugins: [
			federation({
				filename: 'remoteEntry.js',
				name: 'store',
				exposes: {
					'./cookie': './src/components/Cookie.tsx',
				},
				remotes: {
					store: remotes.store,
				},
				shared: {
					react: {
						requiredVersion: dependencies.react,
						singleton: true,
					},
				},
			}),
			react(),
		],
	};
});
