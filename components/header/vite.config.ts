import { defineConfig } from 'vite-microfrontend';
import react from '@vitejs/plugin-react';

export default defineConfig({
	federation: {
		name: 'header',
		exposes: {
			'./header': './src/components/Header.tsx',
		},
	},
	plugins: [react()],
});
