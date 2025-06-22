import { defineConfig } from 'vite-microfrontend';
import react from '@vitejs/plugin-react';

export default defineConfig({
	federation: {
		name: 'store',
		exposes: {
			'./store': './src/store',
		},
	},
	plugins: [react()],
});
