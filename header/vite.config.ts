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
			port: 3002,
		},
		build: {
			target: 'chrome89',
		},
		plugins: [
			{
				name: 'generate-environment',
				options: function () {
					console.info('selfEnv', selfEnv);
					writeFileSync('./src/environment.ts', `export default ${JSON.stringify(selfEnv, null, 2)};`);
				},
			},
			federation({
				filename: 'remoteEntry.js',
				name: 'header',
				exposes: {
					'./header': './src/components/Header.tsx',
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
