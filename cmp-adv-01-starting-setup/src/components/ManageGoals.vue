<template>
  <div>
    <h2>Manage Goals</h2>
    <input type="text" ref="goal" />
    <button>Set Goal</button>
    <error-alert>
      <h2>Input is invalid</h2>
      <p>Please enter at least a few characters .....</p>
      <button @click="confirmError">Okay</button>
    </error-alert>
  </div>
</template>

<script>
import ErrorAlert from "./ErrorAlert.vue";
export default {};
</script>
