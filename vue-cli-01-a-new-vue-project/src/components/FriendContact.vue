<template>
  <!-- <section> -->
  <li>
    <!-- <header> -->
    <header>
      <h1>{{ name }} {{ isFavourite ? "(Favourite)" : "" }}</h1>
    </header>
    <!-- </header> -->
    <button @click="toggle">show details</button>
    <ul v-if="showDisable">
      <li><strong>Phone no : </strong>{{ phoneNumber }}</li>
      <li><strong>Email : </strong>{{ emailAddress }}</li>
    </ul>
  </li>
  <!-- </section> -->
</template>

<script>
export default {
  //   props: ["name", "phoneNumber", "emailAddress"],
  props: {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavourite: {
      type: Boolean,
      required: false,
      default: false,
      //   validator: (value) => {
      //     return value === "1" || value === "0";
      //   },
    },
  },
  data() {
    return {
      showDisable: false,
    };
  },
  methods: {
    toggle() {
      this.showDisable = !this.showDisable;
    },
  },
};
</script>
