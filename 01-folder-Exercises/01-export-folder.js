export class CrudData {

    constructor(nameUser, identification, email) {

        this.nameUser = nameUser

        this.identification = identification



        this.email = email
    }


    get dataUser() {


        console.warn(` Name :${this.nameUser} , Id : ${this.identification}  , Email : ${this.email}`)
    }
}


export function Parameter() {

    return true
}



export const myConstantes = 'My first  steps'
import { CrudDataSend, Parameters, myConstantes2 } from '../31-modules-exercises.js';



let myCrud = new CrudDataSend('Luisa', '524545121336136', 'juliana@gmail.com')


console.log(myCrud)

console.log(Parameters())
console.log(myConstantes2)
