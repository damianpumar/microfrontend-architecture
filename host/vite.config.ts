import { defineConfig } from 'vite';
import { federation } from '@module-federation/vite';

import react from '@vitejs/plugin-react';

import { dependencies } from './package.json';
import { defineCommonConfig } from '../common';

export default defineConfig(({ mode }) => {
	const { remotes, base } = defineCommonConfig(mode);

	return {
		...base,
		plugins: [
			federation({
				filename: 'remoteEntry.js',
				name: 'host',
				remotes: {
					store: remotes.store,
					header: remotes.header,
					front: remotes.front,
					user: remotes.user,
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
					'react-router-dom': {
						requiredVersion: dependencies['react-router-dom'],
						singleton: true,
					},
				},
			}),
			react(),
		],
	};
});
