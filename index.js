#!/usr/bin/env node


const program = require('commander');
const pckg = require('./package.json');





const main = require('./bin/index.js');
 
 
 
program
.command('init <name>')
.description('Initialise a new project')
.action(function(name){

  main.createProject(name);

})


program.version(pckg.version);
program.parse(process.argv);

if (!program.args.length) {
  program.outputHelp();
}
