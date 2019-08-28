const commander = require('commander');
const packagejson = require('./package.json');
const launchServer = require('./server')

const init = async (argv) => {
    const program = new commander.Command();
  
  
    program.version(packagejson.version);
  
    program
      .option('-f, --file', 'Import a folder')
      .parse(process.argv);

    if (program.args.length < 2 || program.args.length > 3) {
        console.log(program.args.length)
        console.log("Wrong number of arguments, please input only a file or use -f for a folder name")
        return
    }
    launchServer(program.args)
  };

init(process.argv)

