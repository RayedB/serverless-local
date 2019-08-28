const commander = require('commander');
const packagejson = require('./package.json');
const launchServer = require('./server')

const init = async (argv) => {
  const program = new commander.Command();


  program.version(packagejson.version);

  program
    .option('-file, --file', 'Import a folder')
    .parse(process.argv);

  const args = verifyArgs(program.args);
  launchServer(args[0], args[1]);
};

const verifyArgs = args => {
  if (args.length !== 2) {
    console.log("Wrong number of arguments, please pass file/folder name and function name")
    return
  }
  return args
}

init(process.argv)

