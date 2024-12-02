////// Exportacion de modulos



export function add(a, b) {

    return a + b

}




console.log(add(5, 9))



///// Propiedades
export const name = 'BadBoy'
export const PI = 31416

////// Exportacion por defecto

export default function sustraction(a, b) {


    return a - b

}



///// Classes

export class Circle {

    constructor(radius) {

        this.radius = radius
    }


    area() {

        return Math.PI * Math.pow(this.radius, 2)
    }


    perimeter() {
        return 2 * Math.PI * this.radius
    }
}




