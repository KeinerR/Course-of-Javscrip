///// 1 Create a class that receives two properties




class Person {

    #experience
    #alias
    #personName


    constructor(personName, alias, experience = 0) {

        this.#personName = personName
        this.#alias = alias
        this.#experience = experience
    }


    mission() {

        console.log(`${this.#alias}  you have  a mission`)
    }

    static finished(alias, experience) {

        console.log(`${alias} nuemro de misiones Realizadas ${experience} `)
    }
    get personalData() {

        console.log(` Name : ${this.#personName}  , Alias : ${this.#alias} ,  Level from  missions performed : ${this.#experience} `)
    }
    personalDataMission() {

        console.log(` Name : ${this.#personName}  , Alias : ${this.#alias} ,  Level from  missions performed : ${this.#experience} `)
    }

    set updateExperience(newExperience) {

        this.#experience = newExperience
    }

}

let firstPerson = new Person('Keiner', 'Shadow')






////// 2 Add a method to the class that  use the properties


// mission() {

//     console.log(`${this.alias}  you have  a mission`)
// }



/////// 3 Diplay the  values of the properties and   invokes  the  function

console.log(firstPerson)
firstPerson.mission()

////// 4 Adds  a static method  to   the first class




// static finished(alias, experience) {

//     console.log(`${alias} nuemro de misiones Realizadas ${experience} `)
// }

//// 5  use of the  method static


Person.finished('Shadow', 19)


////// 7 Create a class  that  use  the  getter y settter


// get personalData(){

//     console.log(` Name : ${this.personName}  , Alias ${this.alias}   Level from  missions performed : ${this.experience} `)
// }


// set updateExperience(newExperience){

//     this.experience = newExperience
// }


///// 8 Modifies   the class with getter and setter to  use   private properties

firstPerson.personalData
firstPerson.updateExperience = 30
firstPerson.personalData


///// 9 use the  getters and setters and Diplay their values


firstPerson.personalData
firstPerson.updateExperience = 30
firstPerson.personalData





/////// 10  Overrive a method of a  class that  using inheritance





class Misisons extends Person {


    constructor(personName, alias, experience, missionNumber, state) {

        super(personName, alias, experience)
        this.missionNumber = missionNumber
        this.state = state

    }


    personalDataMission() {
        console.log(`Mission Number: ${this.missionNumber}, State: ${this.state}`);

    }

    showPersonalData() {
        console.log('Person Data from Getter:')
        this.personalData
    }

}


let mission = new Misisons('Paulo', 'Shadow', 20, 20, true)


mission.personalDataMission()
mission.showPersonalData()


