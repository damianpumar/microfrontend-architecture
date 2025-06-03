#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const deleteNodeModules = (dir, folder) => {
	fs.readdirSync(dir, { withFileTypes: true }).forEach((entry) => {
		const fullPath = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			if (entry.name === folder) {
				try {
					fs.rmSync(fullPath, { recursive: true, force: true });
				} catch {}
			} else {
				deleteNodeModules(fullPath, folder);
			}
		}
	});
};

const rootDir = process.cwd();
const deleteAll = (folder) => {
	deleteNodeModules(rootDir, folder);
};

['node_modules', 'dist'].forEach((folder) => {
	deleteAll(folder);
});

console.log('🧹 Cleanup completed!');
