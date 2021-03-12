<template>
  <div class="min-h-screen">
    <TableOfContentStatic :chapters="chapters" :anchors="anchors" />
    <Drawer :chapters="chapters" />
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    data() {
      return {
        isOpen: true
      };
    },
    async asyncData({ $content }) {
      const poeme = await $content('poeme').fetch();
      const tableOfContent = await $content('accueil').fetch();

      return {
        poeme,
        tableOfContent
      };
    },
    computed: {
      ...mapGetters(['anchors', 'chapters'])
    },
    created() {
      this.$store.commit('SET_POEME', this.poeme);
    }
  };
</script>

<style>
  /* Sample `apply` at-rules with Tailwind CSS */
  /* .container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
} */
  .page-enter-active,
  .page-leave-active {
    transition-property: all;
    transition-timing-function: ease-out;
    transition-duration: 0.1s;
  }
  .page-enter,
  .page-leave-to {
    /* transform: translateX(600px); */
    opacity: 0;
  }
</style>
