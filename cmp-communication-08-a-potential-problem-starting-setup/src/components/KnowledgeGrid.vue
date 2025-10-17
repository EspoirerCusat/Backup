<template>
  <ul>
    <knowledge-element
      v-for="topic in topics"
      :key="topic.id"
      :id="topic.id"
      :topic-name="topic.title"
      :description="topic.description"
      @click="selectTopic(topic.id)"
    ></knowledge-element>
  </ul>
</template>

<script>
export default {
  inject: ['topics', 'selectTopic'],
  emits: ['select-topic'],
};
</script>
