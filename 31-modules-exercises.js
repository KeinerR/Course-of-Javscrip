//////1 Export a function

export function generateTable(number) {

    for (let index = 0; index < 10; index++) {


        let data = number * index

        console.log(`RThe result is  ${number}  * ${index} =  ${data}`)


    }


}



/////2 Export a constants


export const numberGenerate = 2

///// 3 Export a class


export class Person {

    constructor(name, last_name) {

        this.name = name

        this.last_name = last_name
    }


    get getData() {
        console.warn(`Hello  My name is ${this.name} and my last_name is ${this.last_name}`)
    }

}


///// 4 Import a function


import { greet, constante, Animal } from "./33-export-data.js"

greet()
///// 5 Import a constants


console.log(constante)



///// 6 Import a class

let dataAnimal = new Animal('Revan', 'Bird')

console.log(dataAnimal)

////// 7 Export a function  a constants and  a  class for default

const exportConstans = 'Juan manuel'

// export default exportConstans


// export default function suma(a, b) {

//     return a + b
// }


export default class Car {

    constructor(carName, model) {

        this.carName = carName,
            this.model = model
    }


    set sendCar(carName) {
        this.carName = carName
    }

    set senModel(modelCar) {

        this.model = modelCar
    }



    get newCar() {

        console.warn(`The model of your new car ${this.carName} is  ${this.model}   `)
    }
}


///// 8 Impor  a  function, constants and a class for default


import constantes from './33-export-data.js'

// let dataCarNew = new dataCar('Ferrari', '2024')

// console.warn(dataCarNew.carName)

// dataCarNew.senModel = 2025
// console.warn(dataCarNew.model)
// console.log(dataSuma(25, 25))

console.log(constantes)

/// 9 Export a function a constnts  and a class from a folder


// import { CrudData, Parameter, myConstantes } from "./01-folder-Exercises/01-export-folder.js"

// let crud = new CrudData('Keiner', '69652212335', 'keiner@gmail.com')


// crud.dataUser
// console.log(Parameter())

// console.log(myConstantes)




//// 10 Import a function a constants and  a class from a diferent  directory to back 

export class CrudDataSend {

    constructor(nameUser, identification, email) {

        this.nameUser = nameUser

        this.identification = identification



        this.email = email
    }


    get dataUsers() {


        console.warn(` Name :${this.nameUser} , Id : ${this.identification}  , Email : ${this.email}`)
    }
}


export function Parameters() {

    return true
}



export const myConstantes2 = 'My first  steps'

