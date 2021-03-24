<template>
  <div>
    <div :key="person.id" v-for="person in getPeople">
      {{ person.nom }} {{ person.llinatge1 }} {{ person.llinatge2 }}
      {{ person.dni }}
      <Button
        @button-click="deletePerson(person.id)"
        text="borra"
        color="red"
      />
    </div>
  </div>
</template>

<script>
import Button from "./Button";

export default {
  name: "People",
  methods: {
    deletePerson(id) {
      this.$store.dispatch("deletePerson", id);
    },
  },
  computed: {
    getPeople() {
      return this.$store.getters.getPeople;
    },
  },
  components: {
    Button,
  },
};
</script>

<style scope>
.fas {
  color: red;
}
</style>