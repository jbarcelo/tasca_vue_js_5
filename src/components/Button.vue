<template>
  <button @click="onClick()" :style="{ background: color }" class="btn">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    color: String,
  },
  methods: {
    onClick() {
      console.log(this.text);
      console.log("button click");
      this.$emit("button-click");
    },
  },
  emits: ["button-click"],
};
</script>