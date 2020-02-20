const path = require('path');
const fs = require('fs');
const exec = require('exec-sh');
let countargv  = process.argv[1].length;
 let favPath = process.argv[1].substring(0, countargv-9);




exports.createProject = function (name) {

  new Promise(function(resolve, reject) {
	exec(`mkdir ${name}`);
	setTimeout(() => {
		console.log('Creating files');
		fs.copyFile(path.resolve(favPath, 'lib/index.html'), `${name}/index.html`, (err) => {
			 
		});
		fs.copyFile(path.resolve(favPath, 'lib/bootstrap.min.js'), `${name}/bootstrap.min.js`, (err) => {

		});
		fs.copyFile(path.resolve(favPath, 'lib/jquery-3.2.1.min.js'), `${name}/jquery-3.2.1.min.js`, (err) => {

		});
		fs.copyFile(path.resolve(favPath, 'lib/jquery.customjquery.js'), `${name}/jquery.customjquery.js`, (err) => {

		});
	}, 1000);
}).then(value => {

	console.log('working');
}, rejector => {
	 
	console.log('try again');
});
};
