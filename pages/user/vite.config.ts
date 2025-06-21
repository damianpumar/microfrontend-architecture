import react from '@vitejs/plugin-react';

import { defineConfig } from 'vite-microfrontend/vite';

export default defineConfig({
	federation: {
		name: 'user',
		exposes: {
			'./user': './src/components/User.tsx',
		},
	},
	plugins: [react()],
});
