<script src="https://unpkg.com/vue@3.4.9/dist/vue.global.js"></script>

v-model : Two way binding ==> value change hoga to data me vi change ho jayega..

```html
<input type="text" v-model="name" />

<p>Your Name: {{ name }}</p>
```

direct method call krna html se {{ fun() }} is not the good idea
kyoki vue har bar koe vi section change hoga to fun call hoga which
is not good for performace..

computed ==> As a variable treat hoga... function ke ander wale koe vi state change hone
be render hoga..

```js

computed: {
    fullName() {
        console.log("render!!!!");
        if (this.name === "") return "";
        return this.name + " " + "kumar";
    },
},

```

Watchers(watch) ==> data ke name ka function, it will trigger if data change hoga

```js

watch: {
    counter() {
    if (this.counter > 50) {
    this.counter = 0;
    }
    },
},

```

@Click ==> v-on:Click
v-bind: ==> :

styling

```html
<div
  class="demo"
  :style="{borderColor : boxASelected ? 'red' : '#ccc'}"
  @click="boxSelected('A')"
></div>
```

or
passs object (key, bool) in class

```html
<div
  class="demo"
  :class="{active : boxASelected}"
  @click="boxSelected('A')"
></div>
```

class and compute

In Vue, computed properties are used to declare values that are derived (computed) from other reactive data. They are cached based on their dependencies and will only re-run when one of those dependencies changes.

```html
<div class="demo" :class="boxA" @click="boxSelected('A')"></div>
<div :class="['demo', {active : boxBSelected}]" @click="boxSelected('B')"></div>
```

```js
computed: {
    boxA() {
      return { active: this.boxASelected };
    },
  },
```

# Rendering Conditional Contents & Lists

v-if : agar condition iske ander wala true hoga attribute render hoga
Ye dono just upar wale ke next tage me hi hone cahiyee
v-else-if
v-else

```html
<p v-if="goals.length === 0">
  No goals have been added yet - please start adding some!
</p>
<ul v-else>
  <li>{{goals}}</li>
</ul>
```

v-show : condition ke hisab se element to hide kr deta hai using display "none"
isko tab hi use kro jab wo element bahut frequently toggle kr rha ho

```html
<ul v-show="goals.length > 0">
  <li>{{goals}}</li>
</ul>
```

v-for ==> object, array sabme iterate kr skte

```html
for(const goal in goals)
<ul v-show="goals.length > 0">
  <li v-for="goal in goals">{{goal}}</li>
</ul>

<ul>
  <ul v-for="num in 10">
    <li>{{num}}</li>
  </ul>
</ul>

<ul>
  <li v-for="(value, key, index) in {name : 'Ravindra', age : 24}">
    {{index}} - {{key}} - {{value}}
  </li>
</ul>

<li v-for="(goal,index) in goals" @Click="removeGoal(index)">
  {{goal}} - {{index}}
</li>
```

:key ==> use kro elements/components ko distinguish krne ke liye warna bug aa jata hai,
uper wala delete hone pe niche wala delete ho jata hai

```html
<li v-for="(goal,index) in goals" :key="goal" @Click="removeGoal(index)">
  <p>{{goal}} - {{index}}</p>
  <input type="text" @Click.stop />
</li>
```

Vue re-uses DOM elements to optimize performance ==> This leads to bug
if elements contains state
Bind the key attribute to unique value to help vue
identify elements that belong to the list content

@input

```html
<input type="text" @input="saveInput" />
```

Proxy in Js : Proxy in JS ek wrapper hai jo object ke access (read/write) ko control ya modify karne ka tarika deta hai.

```js
const data = {
  message: "Hello!",
  longMessage: "Hello world",
};

const handle = {
  set(target, key, value) {
    console.log(target, key, value);
    if (key === "message") {
      target.longMessage = value + " world";
    }
    target[key] = value;
  },
};

const proxy = new Proxy(data, handle);
proxy.message = "Namaste";
console.log(proxy.message, proxy.longMessage);
```

We can have multiple app in vue js but there will be no
connection.

template ==> direct code me me inject kr do

```js
const app2 = Vue.createApp({
  template: `
     <p>{{favouriteMeal}}</p>
     <p>Mat ka bhai</p>
  `,
  data() {
    return {
      favouriteMeal: "Pizza",
    };
  },
});

app2.mount("#app2");
```

console.dir ek JavaScript method hai jo object ko expandable tree structure (hierarchy) me dikhata hai, taaki aap uske properties ko easily explore kar sako.

###ref ==> element ko direct access kr skte

```js
<input type="text" ref="userText" />
setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
      console.dir(this.$refs.userText);
},
```

###Virtual Dom

vue vertual dom maintain rkta hai, vue old virtual dom and new virtual dom compare krta hai
aur fir jo difference hai usko update krta hai.

Updates are made to the "virtual dom first" only difference are then render to
the real dom.

#Vue Life cycle

```c
createApp({...}) ==> beforeCreate() ==> created() ==> beforeMount() ==> mounted() ==> mounted vue instance

Data changed ==> beforeUpdtate() ==> updated()

Instance unmounted ==> beforeUnmount() ==> unmounted()
```

##components

```js
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
```

"scripts": {  
 "serve": "export NODE_OPTIONS=--openssl-legacy-provider && vue-cli-service serve",  
 "build": "export NODE_OPTIONS=--openssl-legacy-provider && vue-cli-service build",  
 "lint": "export NODE_OPTIONS=--openssl-legacy-provider && vue-cli-service lint"
},
