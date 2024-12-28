import { federation } from '@module-federation/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { dependencies } from './package.json';

export default defineConfig(() => ({
	server: {
		port: 3000,
	},
	build: {
		target: 'chrome89',
	},
	plugins: [
		federation({
			name: 'host',
			remotes: {
				header: {
					type: 'module',
					name: 'header',
					entry: 'http://localhost:3002/remoteEntry.js',
					entryGlobalName: 'header',
					shareScope: 'default',
				},
				store: {
					type: 'module',
					name: 'store',
					entry: 'http://localhost:3001/remoteEntry.js',
					entryGlobalName: 'remote',
					shareScope: 'default',
				},
			},
			filename: 'remoteEntry.js',
			shared: {
				react: {
					requiredVersion: dependencies.react,
					singleton: true,
				},
			},
		}),
		react(),
	],
}));
