const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Finish Vue Js Course",
      vueLink: "https://www.google.com",
      courseGoalA: "Task A kr le",
      courseGoalB: "Task B kr le",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) return this.courseGoalA;
      //Vue data wale variable ko global me dal deta hai
      else return this.courseGoalB;
    },
    outputGoalHtml() {
      return "<I>Pad le bhai....!!!</I>";
    },
  },
});

app.mount("#user-goal");
