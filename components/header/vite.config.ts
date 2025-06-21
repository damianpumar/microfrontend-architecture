import react from '@vitejs/plugin-react';

import { defineConfig } from 'vite-microfrontend/vite';

export default defineConfig({
	federation: {
		name: 'header',
		exposes: {
			'./header': './src/components/Header.tsx',
		},
	},
	plugins: [react()],
});
