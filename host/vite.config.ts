import { defineConfig } from 'vite-microfrontend';
import react from '@vitejs/plugin-react';

export default defineConfig({
	federation: {
		name: 'host',
	},
	plugins: [react()],
});
