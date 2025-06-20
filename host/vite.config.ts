import { defineConfig } from 'vite';
import { federation } from '@module-federation/vite';

import react from '@vitejs/plugin-react';

import packageJson from './package.json' with { type: 'json' };
import { defineCommonConfig } from 'vite-microfrontend/vite';

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
						requiredVersion: packageJson.dependencies.react,
						singleton: true,
					},
					'react-dom': {
						requiredVersion: packageJson.dependencies['react-dom'],
						singleton: true,
					},
					'react-router-dom': {
						requiredVersion: packageJson.dependencies['react-router-dom'],
						singleton: true,
					},
				},
			}),
			react(),
		],
	};
});
