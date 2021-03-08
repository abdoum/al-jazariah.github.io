<template>
  <div class="container m-auto" dir="rtl">
    <input
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      placeholder="Search Articles"
      class="border border-emerald-300 focus:border-emerald-500 bg-white text-green-900 appearance-none inline-block w-full focus:text-red-600 rounded py-3 px-4 focus:outline-none"
    />
    <ul v-if="searchResults.length">
      <li v-for="result of searchResults" :key="result.id">
        <NuxtLink :to="{ name: '/', params: { slug: result.slug } }">
          {{ result.content }}
        </NuxtLink>
      </li>
    </ul>
    <pre dir="auto">{{ searchResults }}</pre>
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
  async asyncData({ $content }) {
    const index = await $content("accueil").fetch();
    return {
      index
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
