import { exec } from 'child_process';

import { printHelp } from './utils.js';

export const runTest = ({ path }) => {
  if (!path) {
    console.error(`Ошибка: Не указан путь к тестам`);
    process.exit(1);
  }

  exec(`npm run test ${path}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Ошибка: ${error.message}`);
      process.exit(1);
    }
    console.log(stdout);
  });
};

export const help = () => {
  printHelp();
};
