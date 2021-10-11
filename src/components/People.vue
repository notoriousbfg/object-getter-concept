<template>
	<div>
		<p v-for="(person, index) in people" :key="index">{{ person.getName() }}: {{ person.getAge() }}</p>
	</div>
</template>

<script>
export default {
	name: 'People',
	computed: {
		people () {
			return this.$store.getters.peopleObjects
		}
	},
	created () {
		this.$store.dispatch('fetchPeople')
	}
}
</script>
