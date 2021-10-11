export default class Person {
    constructor (person) {
        this.firstName = person.firstName
        this.lastName = person.lastName
        this.age = person.age
    }

    fullName () {
        return `${this.firstName} ${this.lastName}`
    }
}