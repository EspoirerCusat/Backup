<template>
  <ul>
    <li v-for="goal in goals" :key="goal">
      <slot :item="goal" another-prop="Kya bhai"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      goals: ["Finish the course", "Learn Vue ", "Do packing"],
    };
  },
};
</script>

<style scoped>
/* Center container */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* full viewport height */
  background-color: #f0f2f5;
}

/* Styled list */
ul {
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: #ffffff;
  border-radius: 10px;
  max-width: 300px;
  width: 100%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* List items */
li {
  padding: 12px 18px;
  border-bottom: 1px solid #eee;
  font-size: 16px;
  color: #333;
  text-align: center;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #007bff;
  color: white;
}
</style>
