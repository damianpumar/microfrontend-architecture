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
			strictPort: true,
			port: 3003,
		},
		preview: {
			strictPort: true,
			port: 3003,
		},
		base: 'http://localhost:3003',
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
					'./cookie': './src/components/Cookie.tsx',
				},
				remotes: {
					store: {
						type: 'module',
						name: 'store',
						entry: 'http://localhost:3001/remoteEntry.js',
						entryGlobalName: 'store',
						shareScope: 'default',
					},
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
