#!/usr/bin/env node

import { printHelp, executeCommandFabric } from '../src/utils.js';
import { HANDLERS_COMMAND } from '../src/config.js';

const init = () => {
  const [command, ...args] = process.argv.slice(2);

  if (!command) {
    printHelp();
    process.exit(0);
  }

  executeCommandFabric({ handlers: HANDLERS_COMMAND, command, args});
};

init();
