<template>
  <form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <label> nom </label>
      <input type="text" v-model="nom" name="nom" placeholder="nom" />
    </div>
    <div class="form-control">
      <label> llinatge1 </label>
      <input
        type="text"
        v-model="llinatge1"
        name="llinatge1"
        placeholder="llinatge1"
      />
    </div>
    <div class="form-control">
      <label> llinatge2 </label>
      <input
        type="text"
        v-model="llinatge2"
        name="llinatge2"
        placeholder="llinatge2"
      />
    </div>
    <div class="form-control">
      <label> dni </label>
      <input type="text" v-model="dni" name="dni" placeholder="dni" />
    </div>
    <input type="submit" value="guarda" class="btn btn-block" />
  </form>
</template>

<script>
export default {
  name: "AddPerson",
  data() {
    return {
      nom: "",
      llinatge1: "",
      llinatge2: "",
      dni: "",
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      if (!this.nom) {
        alert("afegeix un nom");
        return;
      }
      const newPerson = {
        id: Math.floor(Math.random() * 10000),
        nom: this.nom,
        llinatge1: this.llinatge1,
        llinatge2: this.llinatge2,
        dni: this.dni,
      };
      console.log(newPerson);
      this.$store.dispatch("addPerson", newPerson);

      this.nom = "";
      this.llinatge1 = "";
      this.llinatge2 = "";
      this.dni = "";
    },
  },
};
</script>