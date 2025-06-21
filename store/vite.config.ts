import react from '@vitejs/plugin-react';

import { defineConfig } from 'vite-microfrontend';

export default defineConfig({
	federation: {
		name: 'store',
		exposes: {
			'./store': './src/store',
		},
	},
	plugins: [react()],
});
