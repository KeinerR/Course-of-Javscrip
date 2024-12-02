
////// 1 catches an  exception  using Try-catch


let dataArray = [1, 7, 20, 15, 9, 25, 0]

function try_Catch(data) {


    try {
        for (let index = 0; index < data.length; index++) {


            if (data[index] == 0) {

                throw new Error('error')
            }
        }

    } catch (error) {

        console.error('The  matrix cannot have a Zero', error.message)
    }


}


try_Catch(dataArray)






/////// 2 catches a exeception using try-cacth-finally


let objectNew = {

    dataName: 'Document for review',
    responsible: ' Keiner Rivas',
    review: false

}


const dataReview = (data) => {


    try {
        for (let key in data) {


            if (key == 'review' && data[key] === false) {

                throw Error('Error  the document is nor review')

            }
        }

    } catch (error) {
        console.error('The system  stop  for this error', error.message)

    }
    finally {

        console.log('Next code')

    }



}


let reviewDat = dataReview(objectNew)

////// 3 throws  a generic exception


let alphabet = [
    ['a', 'b', 'c', 'd', 'e'],
    ['f', 'g', 'h', 'i', 'j'],
    ['k', 'l', 'm', 'n', 'o'],
    ['p', 'q', 'r', 's', 't'],
    ['u', 'v', 'w', 'x', 'y'],
    ['z'], ['z']
]


try {
    let mySet = new Set()
    for (let index = 0; index < alphabet.length; index++) {
        const element = alphabet[index];



        for (let data of element) {
            console.log(data)

            if (mySet.has(data)) {

                throw new TypeError('This  value already is  repeated')
            } else {

                mySet.add(data)

            }



        }
    }
    console.log(mySet)
} catch (error) {

    console.error(' The Type  error is  ', error.message)
}



////// 4 Create a  custom  exception

class CustomException extends Error {



    constructor(message, personName, isAlive) {
        super(message)
        this.personName = personName
        this.isAlive = isAlive
    }


    typeError() {
        console.log(`${this.message}  some fields  are  empty`)
    }
    customException() {

        console.error(`Error  the agent ${this.personName} is Died : ${this.isAlive}`)
    }

}






//// 5 throw a excepxión  personalizada



///// 6 Lanza varias excepciones segun una logica definida


class AssingMissions extends CustomException {
    constructor(personName, isAlive, missions, pay) {
        super('Error in mission assignment', personName, isAlive); // Llamada correcta a super
        this.missions = missions;
        this.pay = pay;
    }

    addsMission(nameMissions, typeMission, personName, isAlive) {
        // Lanza excepción personalizada si la persona está muerta
        if (nameMissions === '' || typeMission === '' || personName === '' || isAlive === '') {

            throw new CustomException(`The error  is of type`)

        }
        if (isAlive !== true) {
            throw new CustomException(`The Agent ${personName} is dead.`, personName, isAlive);
        }
        console.warn(`The mission "${nameMissions}" of type "${typeMission}" is assigned to ${this.personName} with a pay of ${this.pay}. State of the person: ${isAlive}`);
    }


    get getMissions() {

        console.warn(`The mission ${this.missions}   is for ${this.personName} with  a pay of  ${this.pay} state of the person  ${this.isAlive}`)

    }






}



// let addMission = new AssingMissions(' there was a error ', 'Shadow', true, 'annihilate to the   sacred knights', 150000)

let addMission2 = new AssingMissions(' there was a error ', 'Kuro', true, 'annihilate to the   sacred  *2', 15000)

let addMission3 = new AssingMissions(' there was a error ', 'Shiro', true, ' to ride  bicycle ', 1000)
let addMission4 = new AssingMissions(' there was a error ', 'code_dark', true, 'to drink  orange juice', 11000)
let addMission5 = new AssingMissions(' there was a error ', 'BadBoy', false, 'Play soccer', 500000)



let addMission = new AssingMissions('Shadow', true, 'Destroy the Sacred Knights', 15000);

try {
    addMission.addsMission('To make exercise', 'daily', 'Shadow', true);
} catch (error) {
    if (error instanceof CustomException) {
        error.customException();  // Muestra el mensaje de error personalizado
    } else {
        console.error(error);
    }
}





////// 7 catch many  exceptions in the  try-catch


try {
    addMission.addsMission('To make exercise', 'daily', 'Shadow', true);
} catch (error) {
    if (error instanceof CustomException) {
        error.customException();  // Muestra el mensaje de error personalizado
    } else {
        console.error(error);
    }
}



try {
    // Crear un objeto de Mission


    // Intentar asignar una misión con un campo vacío
    addMission.addsMission('  ', '', '',);
} catch (error) {
    if (error instanceof CustomException) {
        // Si el error es de tipo 'CustomException', mostramos el mensaje correspondiente
        error.typeError();  // Este método maneja los errores de campos vacíos o nulos
    } else {
        console.error(error);  // Si el error no es una 'CustomException', lo mostramos como error general
    }
}

///// 8 Create a loop that tries to transform a float to each value and capture and display errors.


let loppArray = [2, 9, 6, 8, 45.2, 2, 26, 212, 65, 2, 8, 2, 385, 28, 2, 8, 2, 85,]
function transformFloat(number) {
    for (let numbers of number) {

        if (!(Number.isInteger(numbers))) {
            throw new Error(' is not numbers', numbers)

        }
        console.info(` ther number value is  ${numbers}`)
    }
}


try {
    transformFloat(loppArray);

} catch (error) {

    console.error('The Error is  ', error.message)

}

///// 9 Create  a function that checks if an object has an specific  property an  throws a custom exception



function checkObject(data) {


    for (let dataObject in data) {


        if (!dataObject.includes('job')) {
            throw new Error('the job is not found ');

            // break
        }


    }


}



let myObject = {

    myName: 'Keiner',
    age: 20


}


try {

    checkObject(myObject)
} catch (error) {

    console.log('Error', error.message)
}
////// 10 Create a function that do retries of error case up to a maximum of 10



function errorCase(number) {

    let attempt = 0

    let isNumber = true
    for (let index = 1; index <= 10; index++) {

        if (!Number.isInteger(number)) {
            console.error('is not a number')
            isNumber = false
            attempt = index
        } else {

            isNumber = true
            attempt = index


            break
        }



    }

    return {

        'isNumber': isNumber,

        'attempt': attempt

    }


}


let response = errorCase('1.0')

console.log(response)