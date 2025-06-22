import { defineConfig } from 'vite-microfrontend';
import react from '@vitejs/plugin-react';

export default defineConfig({
	federation: {
		name: 'user',
		exposes: {
			'./user': './src/components/User.tsx',
		},
	},
	plugins: [react()],
});
