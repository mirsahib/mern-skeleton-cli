#! /usr/bin/env node
const yargs = require("yargs");
const utils = require("./utils");
const argv = yargs.argv

const usage = "\nUsage: mern <command> [options]";

const options = yargs
      .command("create", "<Project Name> Create a new mern project",
            {
                  project:
                        { describe: "Name of the project", alias: 'p',demandOption:true }
            }
      )
      .help()
      .alias('help', 'h')
      .argv

// show help
if (options._[0] == null) {
      utils.showHelp();
      return;
}else{
      utils.createProject(options)
}

