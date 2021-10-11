import Collection from './Collection'
import Person from './Person'

export default class PersonCollection extends Collection {
    people () {
        return this.inputArray.map(person => new Person(person))
    }

    fullPeopleNames () {
        return this.getPeople().map(person => person.getFullName())
    }
}