import { defineConfig } from 'vite';
import { federation } from '@module-federation/vite';

import react from '@vitejs/plugin-react';

import packageJson from './package.json' assert { type: 'json' };
import { defineCommonConfig } from 'react-microfrontend-common/vite';

export default defineConfig(({ mode }) => {
	const { remotes, base } = defineCommonConfig(mode);

	return {
		...base,
		plugins: [
			federation({
				filename: 'remoteEntry.js',
				name: 'front',
				exposes: {
					'./front': './src/components/Front.tsx',
				},
				remotes: {
					cookie: remotes.cookie,
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
				},
			}),
			react(),
		],
	};
});
