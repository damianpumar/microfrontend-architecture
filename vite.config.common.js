import { loadEnv } from 'vite';
import path from 'path';
import { writeFileSync } from 'fs';

const loadEnvs = (mode) => {
	const currentWorkingDir = process.cwd();
	const parentDir = path.dirname(currentWorkingDir);

	const globalEnv = loadEnv(mode, parentDir);
	const localEnv = loadEnv(mode, process.cwd());

	return {
		...globalEnv,
		...localEnv,
	};
};

const getProcessVariable = (env) => {
	debugger;
	const project = process.cwd().split('/').pop();

	const url = env[`VITE_${project.toUpperCase()}`];
	const port = url.split(':').pop();

	return {
		port,
		url,
	};
};

export const defineCommonConfig = (mode) => {
	const env = loadEnvs(mode);
	const { port, url } = getProcessVariable(env);
	debugger;

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
