///// Classes


class Persona {

    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }



    /////  Sintaxis
}




let person = new Persona('Keiner', 20, 'Shadow')
let person2 = new Persona('Keiner', 20, 'BadBoy')


console.log(person)
console.log(person2)

console.log(typeof person)


class DefaultPersona {

    constructor(name = 'Chencho', age = 0, alias = 'El divi') {
        this.name = name
        this.age = age
        this.alias = alias
    }



    /////  Sintaxis
}


let defaultPerosna = new DefaultPersona('Camilo', 21)
console.log(defaultPerosna)


///// Acceso a propiedades 

console.log(defaultPerosna.name)
console.log(defaultPerosna['alias'])

defaultPerosna.alias = 'The Power'

console.log(defaultPerosna.alias)




////// function in classes
class PersonWithMethod {

    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }

    walk() {

        console.log('La pérsona camina')
    }



    /////  Sintaxis
}


let Persona3 = new PersonWithMethod('KENER', 20, 'SHADOW')

Persona3.walk()


///// Propiedades privadas



class PrivatePerson {


    #bank

    constructor(name, age, alias, bank) {
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank
    }


    pay() {
        this.#bank
    }

}


let persona4 = new PrivatePerson('Carolina', 25, 'La carola', ' 1656565965489748551')


console.log(persona4.bank) ///// np podemos Acceder

persona4.bank = '555323232323238554' //// este bank no es el mismo #bank este es publico y se creo nuevo





///// Getter an settter

class GetPersona {



    #name
    #age
    #alias
    #bank
    constructor(name, age, alias, bank) {
        this.#name = name
        this.#age = age
        this.bank = bank
        this.#alias = alias
    }



    get name() {

        return this.#name
    }

    set bank(newBank) {
        this.#bank = newBank
    }
    get watchBank() {

        return this.#bank
    }
    /////  Sintaxis
}


let person6 = new GetPersona('Juan', 25, 'Juanda', '53123647889')


console.log(person6)
console.log(person6.name)

person6.bank = '64266324522332523625826'


console.log(person6.watchBank)





/////// Herencia

class Animal {


    constructor(name) {

        this.name = name
    }

    sound() {
        console.log(' Emite un soonido generico')
    }
}


class Dog extends Animal {

    sound() {
        console.log('!Gauu¡')
    }
    run() {
        console.log('El perro corre')
    }
}


let myDog = new Dog('KeinerDog')
myDog.run()
myDog.sound()




class Fihs extends Animal {

    constructor(name, size) {

        super(name)
        this.size = size
    }
    swim() {
        console.log('El Pes nada')
    }
}


let myFish = new Fihs('Kuro', 10)


myFish.swim()
myFish.sound()


////// Metodos static


class MathOprerations {


    static sum(a, b) {
        return a + b
    }



}



// let myClass = new MathOprerations()

// console.log(myClass.sum(5, 10))
console.log(MathOprerations.sum(5, 10))

