import moment from "moment";
import { copyFileSync } from "node:fs";


const today = moment();
console.log(today.format());//2021-05-30T11:50:42+10:00
console.log(today.format('YYYY-MM-DD'));//2021-05-30
console.log(today.format('DD-MM-YYYY'));//30-05-2021
console.log(today.format('YYYY-MM-DD'));//2021-05-30
console.log(today.format('YYYY-MM-DDT00:00:00'));//2021-05-30T00:00:00
console.log(today.format('DD MMM YYYY'));//30 May 2021
console.log(moment(new Date()).format('dddd' + ', ' + 'D MMMM YYYY'))//Sunday, 30 May 2021
console.log(today.add(4, 'days').format('DD MMMM YYYY'));//03 June 2021
console.log("Start of financial year "+moment().month(6).date(1).year(moment().year()).format('DD-MM-YYYY'));//01-07-2021
console.log(moment().subtract(1, 'year').format("DD MM YYYY")); // today last year 
console.log(`${today.hour()} ${today.minute()} ${today.second()}`)//11 50 42
console.log(`${today.hours()} ${today.minutes()} ${today.seconds()}`)//11 50 42


