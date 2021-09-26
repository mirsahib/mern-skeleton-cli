
const shell = require('shelljs')
const chalk = require('chalk')
const { render } = require('template-file');
const { controllerTemplate } = require('../template/controller.js')
const {modelTemplate} = require('../template/model.js')
const {routerTemplate} = require('../template/router.js')
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
                //check if model file exist with same name
                if(fs.existsSync(`server/models/${name}.model.js`)){
                    const data = {
                        item: { 
                            name: name.charAt(0).toUpperCase() + name.slice(1),
                            modelName:name.toLowerCase(),
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
                }else{
                    log(chalk.yellow.bold("model file doesn't exist\nplease create a model file with same name as the controller"))
                }
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
                //check if controller file exist with same name
                if(fs.existsSync(`server/controllers/${name}.controller.js`)){
                    //controller exist,create a new router file and also import the controller
                    const data = {
                        item: { 
                            controller: name.toLowerCase()+'Ctrl',
                            controllerPath:name.toLowerCase()+'.controller',
                            routesName:name.charAt(0).toUpperCase() + name.slice(1),
                            routesId:name.toLowerCase()+'Id',
                            functionName:name.toLowerCase() + 'ByID'
                        }
                    };
                    //create the template
                    const result = render(routerTemplate, data)
                    //write the model file
                    fs.writeFile(`server/routes/${name}.routes.js`, result, function (err) {
                        if (err) throw err;
                        log(chalk.green.bold('File created successfully'))
                    });

                }else{
                    //give a warning
                    log(chalk.yellow.bold("controller file doesn't exist\nplease create a controller file with same name as the routes"))
                }
                        
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
                //prettify model name 
                const data = {
                    item: { 
                        schemaName: name.charAt(0).toUpperCase()+name.slice(1)+'Schema',
                        modelName:name.charAt(0).toUpperCase() + name.slice(1)
                    }
                };
                //create the template
                const result = render(modelTemplate, data)
                //write the model file
                fs.writeFile(`server/models/${name}.model.js`, result, function (err) {
                    if (err) throw err;
                    log(chalk.green.bold('File created successfully'))
                });
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