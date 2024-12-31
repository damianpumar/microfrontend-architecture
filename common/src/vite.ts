import { loadEnv } from 'vite';
import path from 'path';
import { writeFileSync } from 'fs';

const loadGlobalEnv = (mode: string, currentWorkingDir = process.cwd()): Record<string, string> => {
	const parentDir = path.dirname(currentWorkingDir);

	const globalEnv = loadEnv(mode, parentDir);

	if (Object.keys(globalEnv).length > 1) return globalEnv;

	return loadGlobalEnv(mode, parentDir);
};

const loadEnvs = (mode: string) => {
	const globalEnv = loadGlobalEnv(mode);
	const localEnv = loadEnv(mode, process.cwd());

	return {
		...globalEnv,
		...localEnv,
	};
};

const getProcessVariable = (env: Record<string, string>) => {
	const project = process.cwd().split('/').pop();

	const url = env[`VITE_${project?.toUpperCase()}`];
	const port = url.split(':').pop();

	return {
		port: parseInt(port ?? '0'),
		url,
	};
};

export const defineCommonConfig = (mode: string) => {
	const env = loadEnvs(mode);
	const { port, url } = getProcessVariable(env);

	const base = {
		resolve: {
			alias: {
				src: '/src',
			},
		},
		server: {
			strictPort: true,
			port,
		},
		preview: {
			strictPort: true,
			port,
		},
		base: url,
		build: {
			target: 'chrome89',
		},
	};

	const remotes = {
		header: {
			type: 'module',
			name: 'header',
			entry: `${env.VITE_HEADER}/remoteEntry.js`,
			entryGlobalName: 'header',
			shareScope: 'default',
		},
		store: {
			type: 'module',
			name: 'store',
			entry: `${env.VITE_STORE}/remoteEntry.js`,
			entryGlobalName: 'remote',
			shareScope: 'default',
		},
		cookie: {
			type: 'module',
			name: 'cookie',
			entry: `${env.VITE_COOKIE}/remoteEntry.js`,
			entryGlobalName: 'remote',
			shareScope: 'default',
		},
		front: {
			type: 'module',
			name: 'front',
			entry: `${env.VITE_FRONT}/remoteEntry.js`,
			entryGlobalName: 'remote',
			shareScope: 'default',
		},
		user: {
			type: 'module',
			name: 'user',
			entry: `${env.VITE_USER}/remoteEntry.js`,
			entryGlobalName: 'remote',
			shareScope: 'default',
		},
	};

	const plugins = [
		{
			name: 'generate-environment',
			options: function () {
				writeFileSync('./src/environment.ts', `export default ${JSON.stringify(env, null, 2)};`);
			},
		},
	];

	return {
		selfEnv: env,
		base,
		remotes,
		plugins,
	};
};
