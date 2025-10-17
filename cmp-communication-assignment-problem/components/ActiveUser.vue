<template>
  <div>
    <h2>{{ name }}</h2>
    <h3>{{ age }}</h3>
  </div>
</template>

<script>
export default {
  props: ["name", "age"],
  data() {
    return {};
  },
  methods: {
    // updateUser(name, age) {
    //   this.name = name;
    //   this.age = age;
    // },
  },
};
</script>

<style></style>
