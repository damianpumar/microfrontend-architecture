import react from '@vitejs/plugin-react';

import { defineConfig } from 'vite-microfrontend/vite';

export default defineConfig({
	federation: {
		name: 'front',
		exposes: {
			'./front': './src/components/Front.tsx',
		},
	},
	plugins: [react()],
});
