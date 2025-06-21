import react from '@vitejs/plugin-react';

import { defineConfig } from 'vite-microfrontend/vite';

export default defineConfig({
	federation: {
		name: 'cookie',
		exposes: {
			'./cookie': './src/components/Cookie.tsx',
		},
	},
	plugins: [react()],
});
