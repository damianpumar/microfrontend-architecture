import react from '@vitejs/plugin-react';

import { defineConfig } from 'vite-microfrontend';

export default defineConfig({
	federation: {
		name: 'header',
		exposes: {
			'./header': './src/components/Header.tsx',
		},
	},
	plugins: [react()],
});
