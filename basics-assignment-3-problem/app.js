const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      result: "",
    };
  },
  watch: {
    counter() {
      if (this.counter === 37) {
        this.result = "You WON!!!!";
        const that = this;
        setTimeout(() => {
          that.counter = 0;
        }, 5000);
        return;
      }
      if (this.counter > 37) {
        this.result = "Too much!";
      } else {
        this.result = "Not there yet";
      }
    },
  },
  methods: {
    Add5() {
      this.counter += 5;
    },
    Add1() {
      this.counter += 1;
    },
  },
});

app.mount("#assignment");
