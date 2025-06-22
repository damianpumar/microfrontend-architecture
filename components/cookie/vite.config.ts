import { defineConfig } from 'vite-microfrontend';
import react from '@vitejs/plugin-react';

export default defineConfig({
	federation: {
		name: 'cookie',
		exposes: {
			'./cookie': './src/components/Cookie.tsx',
		},
	},
	plugins: [react()],
});
