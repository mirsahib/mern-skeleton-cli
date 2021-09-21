#! /usr/bin/env node
const { program } = require('commander');
const util = require('./utils')
const chalk = require('chalk')
const log = console.log
const version = require('../package.json').version


program.version(version)

program
      .description("A command line interface for mern-skeleton")
      .usage('[command] [options]')
      .name('mern')


program.command('create')
      .option('-p, --project <name>', 'Create a new mern project')
      .option('-c, --controller <name>', 'Create a new controller')
      .option('-r, --router <name>', "Create a new router")
      .action((args) => {
            //allow only one argument
            let argsLength = Object.keys(args).length
            if (argsLength <= 1) {
                  if (args.project) {
                        util.createProject(args.project)
                  } else if (args.controller) {
                        util.createProject(args.controller)
                  } else if (args.router) {
                        util.createProject(args.router)
                  } else {
                        log(chalk.red.bold('error: Something went wrong'))
                  }

            } else {
                  log(chalk.red.bold('error: Multiple argument has been passed only one argument is allowed'))
            }
      })


program.parse(process.argv);
