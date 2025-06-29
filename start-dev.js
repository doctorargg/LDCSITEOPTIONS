const { spawn } = require('child_process');
const path = require('path');

console.log('Starting Next.js development server...\n');

const nextPath = path.join(__dirname, 'node_modules', 'next', 'dist', 'bin', 'next');

const child = spawn('node', [nextPath, 'dev'], {
  cwd: __dirname,
  stdio: 'inherit',
  shell: true,
  env: { ...process.env, PORT: process.env.PORT || '3000' }
});

child.on('error', (error) => {
  console.error('Failed to start:', error);
});

child.on('close', (code) => {
  console.log(`Process exited with code ${code}`);
});