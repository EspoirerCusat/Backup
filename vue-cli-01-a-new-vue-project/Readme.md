```js
  props: {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavourite: {
      type: String,
      required: false,
      default: "0",
      validator: (value) => {
        return value === "1" || value === "0";
      },
    },
  },
```
