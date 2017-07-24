const moment = require('moment');

const chalk = require('chalk');

console.log(`It is the ${chalk.blue(moment().format("DDDo"))} day of the year.`);
