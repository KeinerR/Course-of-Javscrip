////// Objetos

//// Sintaxis

let Persona = {

    Name: 'Keiner',
    Age: 20,
    Alias: 'Shadow'
}


////Acceso a las propiedades

//// Notacion llamada por punto

console.log(Persona.Name)
//// Notacion de corchete

console.log(Persona['Alias'])

//// Modificación


Persona.Name = 'Julian Rivas'

console.log(Persona.Name)

Persona.Age = '20'
console.log(Persona.Age)
console.log(typeof Persona.Age)
/// Eliminar Propiedades

delete Persona.Age
console.log(Persona)


//// Nueva propiedad
Persona.Email = 'keiner.rivas@cetiia.co'
Persona.Age = 20

console.log(Persona)



///// Mtodos en los Objetos (function)


let Persona2 = {

    Name: 'Daniel Mosquera',
    Age: 20,
    Alias: 'Shadow',
    Walk: function () {
        console.log(`${this.Name}  is walking`)
    }
}

Persona2.Walk()


//// Anidacion de Objects

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

console.log(Persona3)
console.log(Persona3.job.name)
Persona3.job.work()


////// Igualdad de Objects



let Persona4 = {

    Name: 'Julian Rivas',
    Age: 20,
    Alias: 'Shadow'
}

console.log(Persona)
console.log(Persona4)

console.log(Persona == Persona4)
console.log(Persona === Persona4)
console.log(Persona.Name == Persona4.Name)
console.log(Persona.Name)
console.log(Persona4.Name)



//////Iteracion


for (key in Persona4) {

    console.log(` ${key} : ${Persona4[key]}`)
}


////////  Function como objects




function Person(name, age) { ///// deberia ser una clase noes la mejor

    this.name = name
    this.age = age
}



let Persona5 = new Person('Keiner', 20)

console.log(Persona5)

console.log(typeof Persona4)
console.log(typeof Persona5)


