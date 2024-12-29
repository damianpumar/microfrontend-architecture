import { federation } from '@module-federation/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { dependencies } from './package.json';

export default defineConfig(() => ({
	resolve: {
		alias: {
			src: '/src',
		},
	},
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
				cookie: {
					type: 'module',
					name: 'cookie',
					entry: 'http://localhost:3003/remoteEntry.js',
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
}));
