const app = Vue.createApp({
  data() {
    return {
      tasks: ["task1", "task2"],
      task: "",
      toShow: true,
    };
  },
  computed: {
    buttonCaption() {
      return this.toShow ? "Hide" : "Show";
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.task);
    },
    toggleShow() {
      this.toShow = !this.toShow;
    },
  },
});

app.mount("#assignment");
