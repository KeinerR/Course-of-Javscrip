////// Console


//// Log


console.log('Hola JavaScript')


///// error

console.error('Este es un error')

console.error('Error al conectarse a la base d edatos', new Error('Conexion Fallida'))



//// Warn


console.warn('Este es un mensaje de advertencia')


/// info
console.info(' Este es un mensaje de Informacion adicional')

///// table

let data = [

    ['kEINER', 20],
    ['jULIAN', 17]

]
console.table(data)

data = [

    { name: 'Juliana', age: 20 },
    { Alias: 'jULIAN', died: 17 }

]

console.table(data)



///// group


console.group('Usuario')

console.log('Nambre: Keiner')
console.log('Age: 20')
console.log('AliasNambre: Shadow')
console.groupEnd



//// time

console.time('Tiempo de ejecucion')

for (let index = 0; index < 10000; index++) {


}
console.timeEnd('Tiempo de ejecucion')
console.time('Tiempo de ejecucion2')

for (let index = 0; index < 10000; index++) {


}
console.timeEnd('Tiempo de ejecucion2')



////// assert




let age = 1

console.assert(age >= 18, ' El usuario debe ser mator de edad')


//// count 


console.count('Click')
console.count('Click')
console.count('Click')


//// trace  



function functioA() {

    functionB()
}

function functionB() {
    console.trace('Seguimiento de la ejecucion')

}


functioA()
console.clear()
