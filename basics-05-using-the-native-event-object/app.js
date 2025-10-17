const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  watch: {
    counter() {
      if (this.counter > 50) {
        this.counter = 0;
      }
    },
  },
  computed: {
    fullName() {
      console.log("render!!!!");
      if (this.name === "") return "";
      return this.name + " " + "kumar";
    },
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    outputFullName() {
      console.log("render!!!!");
      if (this.name === "") return "";
      return this.name + " " + "kumar";
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
