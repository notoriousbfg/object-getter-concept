import { createStore } from 'vuex'
import axios from 'axios'
import Person from '../modules/Person'

export default createStore({
	state: {
		people: []
	},
	mutations: {
		updatePeople (state, payload) {
			state.people = payload
		}
	},
	actions: {
		async fetchPeople(context) {
			const { data } = await axios.get('./people.json')
			context.commit('updatePeople', data.people)
		}
	},
	modules: {

	},
	getters: {
		peopleObjects (state) {
			return state.people.map(person => new Person(person))
		}
	}
})
