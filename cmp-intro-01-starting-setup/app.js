const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: 1,
          name: "Ravindra",
          phone: "+91 9973097643",
          email: "iamravi@gmail.com",
        },
        {
          id: 2,
          name: "Rohit",
          phone: "+91 9508390439",
          email: "iamrohit@gmail.com",
        },
        {
          id: 3,
          name: "Raj",
          phone: "+91 9503390439",
          email: "iamraj@gmail.com",
        },
      ],
    };
  },
});

app.component("friend-contact", {
  template: `
     <li>
            <h2>{{friend.name}}</h2>
            <button @click="toggle">Show Details</button>
            <ul v-if="diableVisibility">
              <li><strong>Phone:</strong>{{friend.phone}}</li>
              <li><strong>Email:</strong> {{friend.email}}</li>
            </ul>
      </li>`,
  data() {
    return {
      diableVisibility: false,
      friend: {
        name: "Ravindra",
        phone: "+91 999 111 222 0",
        email: "xyz@localhost.com",
      },
    };
  },
  methods: {
    toggle() {
      this.diableVisibility = !this.diableVisibility;
    },
  },
});

app.mount("#app");
