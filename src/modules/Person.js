export default class Person {
    constructor (person) {
        this.firstName = person.firstName
        this.lastName = person.lastName
        this.age = person.age
    }

    getName () {
        return `${this.firstName} ${this.lastName}`
    }

    getAge () {
        return this.age
    }
}