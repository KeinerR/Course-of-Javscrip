////// exepcion



//// Product una excepcion
let myObject
// console.log(myObject.email)




//// Tratamiento de errores



///// try catch


try {
    console.log(myObject.email)
    console.log('finaliza la ejecucion si errores')
} catch {
    console.log('finaliza la ejecucion con errores')

}




////// capturar el error



try {
    console.log(myObject.email)
} catch (error) {
    console.log('se  ha prducido un error ', error.message)

}




////// finally


try {
    console.log(myObject)
} catch (error) {
    console.log('se  ha prducido un error ', error.message)

} finally {

    console.log('Este codigo se ejecuta siempre')
}




// ///// no lo soporta 


// try {
//     console.log(myObject)
// } finally {

//     console.log('Este codigo se ejecuta siempre')
// }



//////Lanzamiento de errores


////// Throw
// throw new Error('Se ha producido un error')

function sum(a, b) {


    if (typeof a !== 'number' || typeof b !== 'number') {

        throw new TypeError(' Esta operacion solo acepta numeros')

    }
    if (!Number.isInteger(a) || !Number.isInteger(b)) {

        throw new Error('Esta operacion solo acepta numeros enteros')
    }

    if (a == 0 || b == 0) {

        throw new SumaError('Se esta intentando  Sumar Cero', a, b)
    }
    return a + b
}

try {
    console.log(sum(4, 5))
    console.log(sum(4554, '5'))
    // console.log(sum('41235', 5))
    // console.log(sum('44522', 5))
    // console.log(sum('4995', 5))
    // console.log(sum('44', 5))
    // console.log(sum('4', 5))


} catch (error) {

    console.log('Se ha producido un error', error.message)

}




//////  Capturar varios typos de errores





/////// Craer excepciones Personalisadas




class SumaError extends Error {

    constructor(message, a, b) {
        super(message)
        this.a = a
        this.b = b
    }



    printNumber() {
        console.log(this.a, ' + ', this.b)
    }
}

try {
    // console.log(sum(4.5, 5))
    console.log(sum(0, 5))



} catch (error) {

    console.log('Se ha  producido un error personalizado ', error.message)
    error.printNumber()
}
