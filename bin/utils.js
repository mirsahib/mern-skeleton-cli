
const shell = require('shelljs')
const chalk = require('chalk')
const fs = require("fs")
const log = console.log


function showHelp() {
    //onsole.log(usage);
    console.log('\nOptions:\r')
    console.log('\t--version\t      ' + 'Show version number.' + '\t\t' + '[boolean]\r')
    //console.log('        -p [<Project Name>]\t' + '      ' + 'Create a mern project' + '\t\t' + '[boolean]\r')
    console.log('\t--help\t\t      ' + 'Show help.' + '\t\t\t' + '[boolean]\n')

}

function createProject(name) {
    try {
        if (fs.existsSync(`${name}`)) {
            log(chalk.red.bold(`error: ${name} folder alread exist,please try another name`))
        } else {
            shell.exec(`git clone https://github.com/shamahoque/mern-skeleton.git ${name}`)
            log(chalk.blue.bold('successfully created ' + chalk.yellow(`${name}`) + '\ncd' + chalk.yellow(` ${name}/`) + '\nnpm install\nnpm run development'))
        }
    } catch (e) {
        console.log("An error occurred.")
    }
}

function createController(name) {
    console.log('create controller', name)
}
function createRouter(name) {
    console.log('create router', name)
}


module.exports = {
    showHelp,
    createProject,
    createController,
    createRouter
}