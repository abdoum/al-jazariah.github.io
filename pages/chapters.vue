<template>
  <div class="light:bg-white dark:bg-gray-800" dir="ltr">
    <!-- <SearchInput /> -->
    <article>
      <!-- <pre>{{ chapters }}</pre> -->
      <h1>{{chapters}}</h1>
      <!-- <nuxt-content :document="chapters"></nuxt-content> -->
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "الراءات",
      searchResults: []
    };
  },
  async asyncData({ $content, params }) {
    // const index = await $content("accueil").fetch();
    const chapters = await $content("poeme").where({ type: 'title' }).only(['id','content']).fetch();
    return {
    //   index,
      chapters
    };
  },
  mounted() {
    this.$store.commit("SET_INDEX", this.index);
  },
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.searchResults = [];
        return;
      }
      this.searchResults = await this.$content("poeme")
        .limit(6)
        .search("content", searchQuery)
        .fetch();
    }
  }
};
</script>

<style></style>
