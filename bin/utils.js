
const shell = require('shelljs')
const chalk = require('chalk')
const { render } = require('template-file');
const { controllerTemplate } = require('../template/controller.js')
const modelTemplate = require('../template/model.js')
const routerTemplate = require('../template/router.js')
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
    //check if server/controllers folder exist
    fs.access('server/controllers', (err) => {
        if (err) {
            log(chalk.red.bold(`error: server/controllers does not exist`))
        } else {
            //check if server/routes/${name}.controllers.js exist
            if (fs.existsSync(`server/controllers/${name}.controller.js`)) {
                log(chalk.red.bold('File already exist please choose a different file name'))
            } else {
                //prettify controller name 
                const data = {
                    item: { 
                        name: name.charAt(0).toUpperCase() + name.slice(1),
                        nameToLower: name.toLowerCase(),
                        namePlural: name.toLowerCase() + 's' ,
                        functionName:name.toLowerCase() + 'ByID',
                        deletedName: 'deleted'+ name.charAt(0).toUpperCase() + name.slice(1)
                    }
                };
                //create the template
                const result = render(controllerTemplate, data)
                //write the controller file
                fs.writeFile(`server/controllers/${name}.controller.js`, result, function (err) {
                    if (err) throw err;
                    log(chalk.green.bold('File created successfully'))
                });
            }
        }
    })


}
function createRouter(name) {
    //check if server/routes folder exist
    fs.access('server/routes', (err) => {
        if (err) {
            log(chalk.red.bold(`error: server/routes does not exist`))
        } else {
            //check if server/routes/${name}.routes.js file exist
            if (fs.existsSync(`server/routes/${name}.routes.js`)) {
                log(chalk.red.bold('File already exist please choose a different file name'))
            } else {
                //shell.exec(`touch server/routes/${name}.routes.js`)
                log(chalk.green.bold('File created successfully'))
            }
        }
    })
}

function createModel(name){
    //check if server/models exist
    fs.access('server/models', (err) => {
        if (err) {
            log(chalk.red.bold(`error: server/models does not exist`))
        } else {
            //check if server/models/${name}.model.js file exist
            if (fs.existsSync(`server/models/${name}.model.js`)) {
                log(chalk.red.bold('File already exist please choose a different file name'))
            } else {
                //shell.exec(`touch server/models/${name}.model.js`)
                log(chalk.green.bold('File created successfully'))
            }
        }
    })
}



module.exports = {
    showHelp,
    createProject,
    createController,
    createRouter,
    createModel
}