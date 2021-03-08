<template>
  <div class="light:bg-white dark:bg-gray-800">
    <pre v-for="e in index" :key="e.id">
        {{
          {
            id: e.id,
            startTime: e.startTime-4,
            type: e.type,
            content: e.content
          },
        }}
    </pre>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  async asyncData({ $content }) {
    const index = await $content("poeme").fetch();
    return { index };
  }
};
</script>

<style></style>
