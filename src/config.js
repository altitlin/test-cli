import { runTest, help } from './commands.js';

export const HANDLERS_COMMAND = {
  'run-test': {
    description: 'Запускает тесты',
    args: { path: 'string' },
    execute: runTest,
  },
  help: {
    description: 'Показывает доступные команды',
    args: {},
    execute: help,
  },
};
