const moment = require('moment');

const chalk = require('chalk');

console.log(`It is ${chalk.cyan(moment().format("dddd, MMMM Do YYYY, h:mm:ss a."))}`)
console.log(`It is the ${chalk.blue(moment().format("DDDo"))} day of the year.`);
// console.log(parseInt(moment().format("ss")) * parseInt(moment().format("H")))

console.log(`It is ${chalk.blueBright((parseInt(moment().format("H")) * 3600) + (parseInt(moment().format("m") * 60)) + (parseInt(moment().format("s"))))} seconds into the day.`)

 // + (parseInt(moment().format("m") * 60))


function dst() {
  if (moment().isDST() === true){
    console.log(`It ${chalk.greenBright('is')} during Dayligt Saving Time.`);
  }else {
    console.log(`It ${chalk.greenBright('is not')} during Dayligt Saving Time.`);
  }
}

dst();

function leapYear() {
  if (moment().isLeapYear() === true) {
    console.log(`It ${chalk.bold.italic.yellowBright('is')} not leap year.`);
  } else {
    console.log(`It ${chalk.bold.italic.yellowBright('is not')} not leap year.`);
  }
}

leapYear();
