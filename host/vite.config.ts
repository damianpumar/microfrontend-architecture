import react from '@vitejs/plugin-react';

import { defineConfig } from 'vite-microfrontend';

export default defineConfig({
	federation: {
		name: 'host',
	},
	plugins: [react()],
});
