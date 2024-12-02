///// 1 Create  a function that correctly uses the error 

let data = true

function updateData(value) {

    let validar = true

    if (value != true) {
        validar = false
        console.error(`the filed is not a true is ${validar}`)
    }


    console.error('error')
    return data = validar


}


updateData('keiner')



///// 2 Create a  function that correctly uses  warn



let personalArray = [5, 4, 5, 55, 5, 5,]
let warSet = new Map([['myName', 'Keiner Manuel'], ['lastName', 'Rivas Mendoza'], ['age', 20]]
)


// console.log(warSet);


if (!(warSet.has('myName')) || !(warSet.has('lastName')) || !(warSet.has('age'))) {
    console.warn('some fields  is empty')

} else {

    console.info('Your Data is good ')
}











////// 3 Create a function that  correctly use    info 


class PersonlaData {

    constructor(email, password) {

        this.email = email
        this.password = password

    }

    get getData() {

        console.info(`your personal data is  your email is : ${this.email} and your password is : ${this.password}`)
    }

}



let firstUser = new PersonlaData('keinerrivas976@gmail.com', '2152545588')


firstUser.getData
//// 4 Use table

let dataTable = [

    ['kEINER', 'Rivas', 20, 'Shadow'],
    ['jULIAN', 'Rivas', 17, 'Light'],
    ['Daniel', 'Mosquera', 10, 'Crazy'],
    ['Liseth', 'Rivas', 7, 'Princess'],
    ['Carme', 'Mendoza', 46, 'Queen'],
    ['Clementina', 'Hurtado', 78, 'Sabiduria']


]




console.table(dataTable)


//////  5 Use group

console.group('DataUsuario')


let DataUsuario = [

    ['kEINER', 'keiner2004@gmail.com'],
    ['jULIAN', 'jjs124@gmail.com'],
    ['Daniel', 'CrazyDaniel123@gmail.com'],
    ['Liseth', 'crying princess@gmail.com'],


]

console.table(DataUsuario)

console.groupEnd()
//// 6 Use time



console.time()

function timeCounter(data) {


    for (let datatime of data) {

        console.log(datatime)
    }

}

timeCounter(dataTable)


console.timeEnd()

////7 Validate with  assert if a number is positive


let validateAsser = [1, 2, 5, 22, 2, 65, -56, 6, -9, -9, 6, 4, 23, 1, 7, -1, -9, -8]



for (let index = 0; index < validateAsser.length; index++) {


    console.assert(validateAsser[index] >= 0, ' The number is not positive')

}

//// 8  Utiliza count





function callClick() {
    console.count('button clicked');

}




// for (let index = 0; index < 20; index++) {
//     callClick()

// }

///// 9 Utiliza trace


function functioA() {

    callClick()
    console.trace('Seguimiento de la ejecucion')
}




functioA()

///// 10 Utiliza clear

console.clear()