<template>
  <nav
    class="flex fixed w-full items-center justify-between px-6 h-16 bg-gray-800 text-gray-400 border-b border-gray-200 z-10"
    :class="{ 'bg-white': !playback }"
    v-touch:swipe.right="drawer"
  >
    <transition
      enter-class="opacity-0"
      enter-active-class="ease-out transition-medium"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-active-class="ease-out transition-medium"
      leave-to-class="opacity-0"
    >
      <div
        @keydown.esc="UPDATE_INDEX_MODAL(false)"
        v-show="indexModal"
        class="z-10 fixed inset-0 transition-opacity"
      >
        <div
          @click="UPDATE_INDEX_MODAL(false)"
          class="absolute inset-0 bg-black opacity-50"
          tabindex="0"
        ></div>
      </div>
    </transition>
    <aside
      class="transform top-0 right-0 w-64 bg-gray-800 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
      :class="indexModal ? 'translate-x-0' : 'translate-x-full'"
    >
      <nuxt-link
        v-for="(c, i) in chapters"
        :key="i"
        @click.native="UPDATE_INDEX_MODAL(false)"
        :to="'/' + c.id"
        class="mr-2 flex items-center p-4 hover:bg-red-400 hover:text-white cursor-pointer font-body"
        no-prefetch
        ><span>{{ Intl.NumberFormat('ar-SA').format(i + 1) }} - </span>
        {{ c.content }}
      </nuxt-link>
    </aside>
  </nav>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex';
  export default {
    props: {
      chapters: {
        type: Array,
        default: null,
        required: true
      }
    },
    data() {
      return {};
    },
    computed: {
      ...mapGetters(['indexModal', 'playback'])
    },
    methods: {
      ...mapMutations(['UPDATE_INDEX_MODAL']),
      handleClick(id) {
        this.UPDATE_INDEX_MODAL(false);
        this.$router.push(`/${id}`);
      },
      drawer() {
        this.UPDATE_INDEX_MODAL(false);
      }
    },
    watch: {
      indexModal: {
        immediate: true,
        handler(indexModal) {
          if (process.client) {
            if (indexModal)
              document.body.style.setProperty('overflow', 'hidden');
            else document.body.style.removeProperty('overflow');
          }
        }
      }
    },
    mounted() {
      document.addEventListener('keydown', (e) => {
        if (e.keyCode == 27 && this.indexModal) this.UPDATE_INDEX_MODAL(false);
      });
    }
  };
</script>
