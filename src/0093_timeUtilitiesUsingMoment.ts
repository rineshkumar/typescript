import moment from "moment";
import { copyFileSync } from "node:fs";


const today = moment();
console.log(today.format());//2021-05-30T11:50:42+10:00
console.log(today.format('YYYY-MM-DD'));//2021-05-30
console.log(today.format('DD-MM-YYYY'));//30-05-2021
console.log(today.format('YYYY-MM-DD'));//2021-05-30
console.log(`${today.hour()} ${today.minute()} ${today.second()}`)//11 50 42
console.log(`${today.hours()} ${today.minutes()} ${today.seconds()}`)//11 50 42