/////  Destructuring

let myArray = [1, 22, 5, 5, 6]
let Persona = {

    Name: 'Keiner',
    Age: 20,
    Alias: 'Shadow'
}

let myValue = myArray[2]

// myArray.push(3, 5, 85, 5, 8, 8)
console.log(myArray)

console.log(myValue)

let myName = Persona.Alias

console.log(myName)


///// Destructuring




///// Sintaxis


let [value0, value1, value2, value3, value4, value5] = myArray


console.log(value0)
console.log(value1)
console.log(value2)
console.log(value3)
console.log(value4)
console.log(value5)




///// Sintaxis de arrays con valor por defecto




let [value6, value7, value8, value9, value10, value11 = 0] = myArray

console.log(value6)
console.log(value7)
console.log(value8)
console.log(value9)
console.log(value10)
console.log(value11)



//////Ignorar elemtos de array  
let [value12, , , , , value17 = 0] = myArray
console.log(value12)

console.log(value17)



////// Sintaxis objects


///// esta liena dara error ya que no se puede destructurar un objeto como un array

// let [Name, Age, Alias] = Persona


/// hay que cambiale sus corchete a  la forma de  objets
let { Name, Age, Alias } = Persona

console.log(Name)
console.log(Age)
console.log(Alias)



// ///// Sintaxis de objets con valor por defecto


//// Al destructuras objetos no s epuede poner nombre a l azarr ya que en los objetos
// se identifican por clave  y si  colocamos una clave  al azar que no esta en el objeto
/// nos dara undefined
/// mientras u en el array  se colocan por posicion o sea que yo puedo ponerle el nombre
//// a la variable que estoy asignando la destructuracion ya que lo va tomando por posicion



let { Name2, Age2, Alias2, email = 'keiner.rivas@cetiia.co' } = Persona

console.log(Name2) /// no existe
console.log(Age2) /// no existe
console.log(Alias2) /// no existe
console.log(email)


///// intaxis object pero con nuevos nombre de variables

let { Name: Name3, Age: Age3, Alias: Alias3 = 'keiner.rivas@cetiia.co' } = Persona

console.log(Name3)
console.log(Age3)
console.log(Alias3)

let Persona3 = {

    Name: 'Daniel Mosquera',
    Age: 20,
    Alias: 'Shadow',
    Walk: function () {
        console.log(`${this.Name}  is walking`)
    },

    job: {

        name: 'Progrmador',
        experiencia: 12,
        work: function () {
            console.log(`${this.name} Tiene  ${this.experiencia} en el trabajo`); // Use job.name
        }
    }

}



let { Name: name4, job: { name: jobName } } = Persona3

console.log(name4)
console.log(jobName)





//// Spreanding (Propagacion) = (...)


///Sintaxis de array

let myArray3 = [...myArray]

/// Copia de array
let myArray2 = [...myArray, 25, 80, 10]
console.log(myArray3)
console.log(myArray2)



///// Combinacio de arrays

let myArra4 = [...myArray2, ...myArray3, ...myArray]

console.log(myArra4)


///// Sintaxis objetcs


let Perosna5 = { ...Persona, cedula: '1076321153' }
console.log(Perosna5)


///Copia de objects

let Perosna6 = { ...Perosna5, Preferencias: 'Programador' }
console.log(Perosna6)





