function showHelp() {
    //onsole.log(usage);
    console.log('\nOptions:\r')
    console.log('\t--version\t      ' + 'Show version number.' + '\t\t' + '[boolean]\r')
    //console.log('        -p [<Project Name>]\t' + '      ' + 'Create a mern project' + '\t\t' + '[boolean]\r')
    console.log('\t--help\t\t      ' + 'Show help.' + '\t\t\t' + '[boolean]\n')

}
function createProject(options) {
    if(options._[0]==="create"){
        shell.exec('git clone https://github.com/atomicptr/dauntless-builder')
    }
}

module.exports = {
    showHelp, createProject
}