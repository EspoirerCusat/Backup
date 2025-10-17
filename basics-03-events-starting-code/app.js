const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "Rakesh",
      conformName: "",
    };
  },
  methods: {
    increment(num) {
      this.counter = this.counter + num;
    },
    decrement(num) {
      this.counter = this.counter - num;
    },
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    submitForm() {
      alert("Form submitted...!!!");
    },
    ConformInput() {
      this.conformName = this.name;
    },
  },
});

app.mount("#events");
