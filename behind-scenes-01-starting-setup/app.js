const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
      console.dir(this.$refs.userText);
    },
  },
  beforeCreate() {
    console.log("beforeCreate()");
  },
  created() {
    console.log("created()");
  },
  beforeMount() {
    console.log("beforeMount()");
  },
  mounted() {
    console.log("mounted()");
  },
  beforeUpdate() {
    console.log("beforeUpdate()");
  },
  updated() {
    console.log("updated()");
  },
  beforeUnmount() {
    console.log("beforeUnmount()");
  },
  unmounted() {
    console.log("unmounted()");
  },
});

app.mount("#app");

setTimeout(() => {
  app.unmount("#app");
}, 3000);

// const app2 = Vue.createApp({
//   template: `
//      <p>{{favouriteMeal}}</p>
//      <p>Mat ka bhai</p>
//   `,
//   data() {
//     return {
//       favouriteMeal: "Pizza",
//     };
//   },
// });

// app2.mount("#app2");

// const data = {
//   message: "Hello!",
//   longMessage: "Hello world",
// };

// const handle = {
//   set(target, key, value) {
//     console.log(target, key, value);
//     if (key === "message") {
//       target.longMessage = value + " world";
//     }
//     target[key] = value;
//   },
// };

// const proxy = new Proxy(data, handle);
// proxy.message = "Namaste";
// console.log(proxy.message, proxy.longMessage);
