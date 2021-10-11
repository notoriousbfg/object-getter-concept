<template>
	<div>
		<p v-for="(person, index) in people" :key="index">{{ person.fullName() }}: {{ person.age }}</p>
	</div>
</template>

<script>
export default {
	name: 'People',
	computed: {
		people () {
			return this.$store.getters.personCollection.people()
		}
	},
	created () {
		this.$store.dispatch('fetchPeople')
	}
}
</script>
