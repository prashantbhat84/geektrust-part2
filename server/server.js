const program = require('commander');
const {
	prompt
} = require('inquirer');
const {
	problem1,
	problem2
} = require('./logic');
const questions1 = [{
	type: 'input',
	name: 'weather',
	message: 'Enter the weather'
}, {
	type: 'input',
	name: 'orbit1Speed',
	message: 'Enter the orbit 1 speed(value will be taken as MM/hr)'
}, {
	type: 'input',
	name: 'orbit2Speed',
	message: 'Enter the orbit 2 speed(value will be taken as MM/hr)'
}];

const questions = [{
	type: 'input',
	name: 'weather',
	message: 'Enter the weather'
}, {
	type: 'input',
	name: 'orbit1Speed',
	message: 'Enter the orbit 1 speed(value will be taken as MM/hr)'
}, {
	type: 'input',
	name: 'orbit2Speed',
	message: 'Enter the orbit 2 speed(value will be taken as MM/hr)'
}, {
	type: 'input',
	name: 'orbit3Speed',
	message: 'Enter the orbit 3 speed(value will be taken as MM/hr)'
}, {
	type: 'input',
	name: 'orbit4Speed',
	message: 'Enter the orbit 4 speed(value will be taken as MM/hr)'
}];

program
	.description('Solving Lengaburu Traffic problem 1 and problem 2');

program
	.command('problem1')
	.alias('p1')
	.description('problem1 - need to enter weather and speed of  2 orbits im megamiles/hour')
	.action(() => {
		prompt(questions1).then(answers => {
			console.log(problem1(answers));


		});
	});


program
	.command('problem2')
	.alias('p2')
	.description('problem2 - need to enter weather and speed of  4 orbits im megamiles/hour')
	.action(() => {
		prompt(questions).then((answers) => {
			console.log(problem2(answers));
		});

	});



program.parse(process.argv);