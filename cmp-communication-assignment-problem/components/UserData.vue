<template>
  <div>
    <active-user :name="name" :age="age"></active-user>
    <form @submit.prevent="submitUser">
      <div>
        <label>Name : </label>
        <input type="text" v-model="name" />
      </div>
      <div>
        <label>Age : </label>
        <input type="number" v-model="age" />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      age: 9,
    };
  },
  methods: {
    submitUser() {
      console.log(this.name, this.age);
      //this.$emit("update-user", this.name, this.age);
    },
  },
};
</script>

<style></style>
