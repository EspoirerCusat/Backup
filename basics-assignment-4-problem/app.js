const app = Vue.createApp({
  data() {
    return {
      user: "",
      user1: false,
      user2: false,
      visible: true,
      hidden: false,
      bgColor: "red",
    };
  },
  computed: {
    style1() {
      return {
        user1: this.user1,
        user2: this.user2,
        visible: this.visible,
        hidden: this.hidden,
      };
    },
  },
  methods: {
    changeClass1(event) {
      if (event.target.value === "user1") {
        this.user1 = true;
        this.user2 = false;
      } else if (event.target.value === "user2") {
        this.user2 = true;
        this.user1 = false;
      } else {
        this.user1 = this.user2 = false;
      }
    },
    toggle() {
      this.visible = !this.visible;
      this.hidden = !this.hidden;
    },
  },
});

app.mount("#assignment");
