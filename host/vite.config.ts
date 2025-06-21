import react from '@vitejs/plugin-react';

import { defineConfig } from 'vite-microfrontend/vite';

export default defineConfig({
	federation: {
		name: 'host',
	},
	plugins: [react()],
});
