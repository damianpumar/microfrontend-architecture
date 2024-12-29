import { loadEnv } from 'vite';
import path from 'path';
import { writeFileSync } from 'fs';

const loadGlobalEnv = (mode) => {
	const currentWorkingDir = process.cwd();
	const parentDir = path.dirname(currentWorkingDir);

	return loadEnv(mode, parentDir);
};

export const defineCommonConfig = (mode) => {
	const globalEnv = loadGlobalEnv(mode);
	const localEnv = loadEnv(mode, process.cwd());
	const selfEnv = {
		...globalEnv,
		...localEnv,
	};

	const base = {
		resolve: {
			alias: {
				src: '/src',
			},
		},
		server: {
			strictPort: true,
			port: selfEnv.VITE_PORT,
		},
		preview: {
			strictPort: true,
			port: selfEnv.VITE_PORT,
		},
		base: `http://localhost:${selfEnv.VITE_PORT}`,
		build: {
			target: 'chrome89',
		},
	};

	const remotes = {
		header: {
			type: 'module',
			name: 'header',
			entry: `${selfEnv.VITE_HEADER}/remoteEntry.js`,
			entryGlobalName: 'header',
			shareScope: 'default',
		},
		store: {
			type: 'module',
			name: 'store',
			entry: `${selfEnv.VITE_STORE}/remoteEntry.js`,
			entryGlobalName: 'remote',
			shareScope: 'default',
		},
		cookie: {
			type: 'module',
			name: 'cookie',
			entry: `${selfEnv.VITE_COOKIES}/remoteEntry.js`,
			entryGlobalName: 'remote',
			shareScope: 'default',
		},
	};

	const plugins = [
		{
			name: 'generate-environment',
			options: function () {
				writeFileSync('./src/environment.ts', `export default ${JSON.stringify(selfEnv, null, 2)};`);
			},
		},
	];

	return {
		selfEnv,
		base,
		remotes,
		plugins,
	};
};
