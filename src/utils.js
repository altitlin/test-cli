export const printHelp = () => {
  console.log(`
    Using:
      test-cli.js <command> [options]

    All commands:
      run-test --path <path/to/src/test>
      help
  `);
};

export const parseArgs = (args, commandSchema) => {
  const parsedArgs = {};
  let key = null;

  args.forEach((arg) => {
    if (arg.startsWith('--')) {
      key = arg.slice(2);

      if (!(key in commandSchema)) {
        console.error(`Ошибка: Неизвестный аргумент --${key}`);
        process.exit(1);
      }
    } else if (key) {
      parsedArgs[key] = arg;
      key = null;
    }
  });

  Object.entries(commandSchema).forEach(([arg]) => {
    if (!parsedArgs[arg]) {
      console.error(`Ошибка: Обязательный аргумент --${arg} не указан`);
      process.exit(1);
    }
  });

  return parsedArgs;
};

export const executeCommandFabric = ({ handlers, command: commandName, args }) => {
  const command = handlers[commandName];

  if (!command) {
    console.error(`Неизвестная команда: ${commandName}`);
    handlers.help.execute();
    process.exit(1);
  }

  command.execute(parseArgs(args, command.args));
};
