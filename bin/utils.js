
const shell =require('shelljs')

function showHelp() {
    //onsole.log(usage);
    console.log('\nOptions:\r')
    console.log('\t--version\t      ' + 'Show version number.' + '\t\t' + '[boolean]\r')
    //console.log('        -p [<Project Name>]\t' + '      ' + 'Create a mern project' + '\t\t' + '[boolean]\r')
    console.log('\t--help\t\t      ' + 'Show help.' + '\t\t\t' + '[boolean]\n')

}
function createProject(options) {
    //console.table(options)
    //console.log(options.p)
    if(options._[0]==="create"){
        shell.exec(`git clone https://github.com/shamahoque/mern-skeleton.git ${options.p}`)
        //shell.mkdir(`${options.p}`)
        shell.cd(`${options.p}/`)
        shell.exec("npm i")
    }
}

module.exports = {
    showHelp, createProject
}