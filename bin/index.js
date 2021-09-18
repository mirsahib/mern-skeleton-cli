#! /usr/bin/env node
const commander = require('commander');
const program = new commander.Command();
const mern = program.command('create');
mern
      .command('project')
      .action(() => {
            console.log('create project');
      });
mern
      .command('controller')
      .action(() => {
            console.log('create controller');
      });
program.parse(process.argv);
