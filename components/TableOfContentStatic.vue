<template>
  <div
    class="bg-gradient-to-r from-green-100 to-teal-100 p-10 grid grid-cols-1  leading-loose place-items-center"
  >
    <div
      class="font-serif text-center transform duration-200 ease-out transition"
      v-for="(p, i) in chapters"
      :key="i"
    >
      <nuxt-link
        :to="'/' + p.id"
        class=" text-xl md:text-3xl text-green-900 hover:underline font-light"
        no-prefetch
        >{{ Intl.NumberFormat("ar-SA").format(i + 1) }} -
        {{ p.content }}</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    chapters: {
      type: Array,
      default: null,
      required: true
    },
    anchors: {
      type: Array,
      default: null,
      required: true
    }
  }
};
</script>
