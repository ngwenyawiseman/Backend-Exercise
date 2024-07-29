//import/expost greet
//npm init es6
//create a index.js
//export the greet function from greet.js
//import the greet function in index.js

//import chalk from 'chalk';
//import the greet module that is in the current folder
//mport greet from './greet.js'

//const styledMessage = chalk.bgGreen.black(greet('Xola'));
//console.log(styledMessage)
import chalk from 'chalk';

import { greet } from  './greet.js';
import { yo } from './yo.js';
import cowsay from 'cowsay';
import figlet from 'figlet';

// console.log(chalk.bgGrey.white(cowsay.say({
//     text:greet('Thulebona')
// })));
figlet ('Hello, Thulebona', function(err,data) {
    if (err){
        console.log('I cannot complain');
        console.dir(err);
        return;
    }
    console.log(chalk.bgdata)
});


//console.log(yo('Thulebona'));
//console.log(greet('Thulebona'));

//let vs const
const styledMessage = chalk.bgCyanBright.black(yo('Thulebona'));
console.log(styledMessage)

const  newMessage = chalk.bgGreen.black(greet('Thulebona'));
console.log(newMessage)


