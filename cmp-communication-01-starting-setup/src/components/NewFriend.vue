<template>
  <form @submit.prevent="submitData">
    <div>
      <label>Name : </label>
      <input type="text" v-model="enteredName" />
    </div>
    <div>
      <label>Phone No : </label>
      <input type="tel" v-model="enteredPhone" />
    </div>
    <div>
      <label>Email : </label>
      <input type="email" v-model="enteredEmail" />
    </div>
    <div>
      <button>Add Contact</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ["add-contact"],
  data() {
    return {
      enteredName: "",
      enteredEmail: "",
      enteredPhone: "",
    };
  },
  methods: {
    submitData() {
      this.$emit(
        "add-contact",
        this.enteredName,
        this.enteredPhone,
        this.enteredEmail
      );
    },
  },
};
</script>
