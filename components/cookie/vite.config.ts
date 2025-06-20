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
				name: 'cookie',
				exposes: {
					'./cookie': './src/components/Cookie.tsx',
				},
				remotes: {
					store: remotes.store,
				},
				shared: {
					react: {
						requiredVersion: packageJson.dependencies.react,
						singleton: true,
					},
				},
			}),
			react(),
		],
	};
});
