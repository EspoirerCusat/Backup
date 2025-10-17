const app = Vue.createApp({
  data() {
    return {
      name: "Ravindra Kumar",
      age: 24,
      randomNumber: Math.random(),
      url: "https://blog.pixelfreestudio.com/wp-content/uploads/2024/10/1_OrjCKmou1jT4It5so5gvOA.jpg",
    };
  },
  methods: {
    getName() {
      return this.name;
    },
    getAge() {
      return this.age;
    },
    getRandom() {
      return this.randomNumber;
    },
  },
});

app.mount("#assignment");
