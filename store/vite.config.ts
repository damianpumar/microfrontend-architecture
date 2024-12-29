import { federation } from '@module-federation/vite';
import react from '@vitejs/plugin-react';
import { writeFileSync } from 'fs';
import { defineConfig, loadEnv } from 'vite';
import { dependencies } from './package.json';

export default defineConfig(({ mode }) => {
	const selfEnv = loadEnv(mode, process.cwd());
	return {
		resolve: {
			alias: {
				src: '/src',
			},
		},
		server: {
			port: 3001,
		},
		preview: {
			port: 3001,
		},
		build: {
			target: 'chrome89',
		},
		plugins: [
			{
				name: 'generate-environment',
				options: function () {
					writeFileSync('./src/environment.ts', `export default ${JSON.stringify(selfEnv, null, 2)};`);
				},
			},
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
