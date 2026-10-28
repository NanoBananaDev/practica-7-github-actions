import { mkdir, cp } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';

for (const archivo of ['src/calculadora.js', 'public/app.js']) {
  execFileSync(process.execPath, ['--check', archivo], { stdio: 'inherit' });
}
await mkdir('dist', { recursive: true });
await cp('public', 'dist', { recursive: true });
await cp('src/calculadora.js', 'dist/calculadora.js');
console.log('Build completado: dist/');
