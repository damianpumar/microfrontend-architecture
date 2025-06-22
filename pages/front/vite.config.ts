import { defineConfig } from 'vite-microfrontend';
import react from '@vitejs/plugin-react';

export default defineConfig({
	federation: {
		name: 'front',
		exposes: {
			'./front': './src/components/Front.tsx',
		},
	},
	plugins: [react()],
});
