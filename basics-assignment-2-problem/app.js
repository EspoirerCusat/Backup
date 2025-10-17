const app = Vue.createApp({
  data() {
    return {
      firstText: "OUTPUT",
      secondText: "OUTPUT",
    };
  },
  methods: {
    showAlert() {
      alert("kya hal hai...!!!!");
    },
    showFirstText(event) {
      this.firstText = event.target.value;
    },
    showSecondText(event) {
      this.secondText = event.target.value;
    },
  },
});

app.mount("#assignment");
