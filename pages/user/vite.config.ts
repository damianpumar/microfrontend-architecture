import { defineConfig } from 'vite';
import { federation } from '@module-federation/vite';

import react from '@vitejs/plugin-react';

import { dependencies } from './package.json';
import { defineCommonConfig } from '../../vite.config.common';

export default defineConfig(({ mode }) => {
	const { remotes, base } = defineCommonConfig(mode);

	return {
		...base,
		plugins: [
			federation({
				filename: 'remoteEntry.js',
				name: 'user',
				exposes: {
					'./user': './src/components/User.tsx',
				},
				remotes: {
					store: remotes.store,
					cookie: remotes.cookie,
				},
				shared: {
					react: {
						requiredVersion: dependencies.react,
						singleton: true,
					},
					'react-dom': {
						requiredVersion: dependencies['react-dom'],
						singleton: true,
					},
				},
			}),
			react(),
		],
	};
});
