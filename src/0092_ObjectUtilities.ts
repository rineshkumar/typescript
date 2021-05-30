export type User = {
    firstName:string, 
    middleName:string,
    lastName:string
}
let user : User = {firstName : "Rinesh", middleName:"",lastName : "Kumar"}

Object.keys(user).forEach(x => console.log(x));// firstName middleName lastName