#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const foldersToClean = ['node_modules', 'dist'];

foldersToClean.forEach((folder) => {
	const folderPath = path.resolve(process.cwd(), folder);
	if (fs.existsSync(folderPath)) {
		console.log(`Removing ${folderPath}...`);
		try {
			execSync(process.platform === 'win32' ? `rmdir /s /q "${folderPath}"` : `rm -rf "${folderPath}"`, { stdio: 'inherit' });
			console.log(`✔ ${folder} removed.`);
		} catch (err) {
			console.error(`✘ Error removing ${folder}:`, err.message);
		}
	} else {
		console.log(`⚠ ${folder} not found, nothing to remove.`);
	}
});

console.log('🧹 Project cleaned up!');
