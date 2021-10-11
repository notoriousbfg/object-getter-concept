import { createStore } from 'vuex'
import axios from 'axios'
import PersonCollection from '../modules/PersonCollection'

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
		personCollection (state) {
			return new PersonCollection(state.people)
		}
	}
})
