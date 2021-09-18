#! /usr/bin/env node
const { program } = require('commander');
const pj = require('../package.json')

program.version(pj.version)
//commands
program
      .command('create')
      .description("Create a new project")
      .usage('-p | --project [<project name>]')
      .option('-p, --project <optional>','project name')
      .option('-c, --controller <required>','create controller')
      .action(function (args) {
            //console.log('mern created',args.project)
            // if(args.project===undefined){
            //       console.log('creating project mern-skeleton')
            // }else{
            //       console.log(`creating project ${args.project}`)
            // }
            if(Object.keys(args).length<=1){
                  console.log('creating project mern-skeleton')
            }else{
                  console.log("error: argument overload, expected one argument at a time")
            }
            //console.log(Object.keys(args).length)
      })
      .parse(process.argv)