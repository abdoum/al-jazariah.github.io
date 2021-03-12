<template>
  <nav
    class="flex fixed w-full items-center justify-between px-6 h-16 bg-white text-gray-700 border-b border-gray-200 z-10" dir="ltr"
    v-touch:swipe.left="drawer"
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
        @keydown.esc="UPDATE_DEFINITION_MODAL(false)"
        v-show="definitionModal"
        class="z-10 fixed inset-0 transition-opacity"
      >
        <div
          @click="UPDATE_DEFINITION_MODAL(false)"
          class="absolute inset-0 bg-black opacity-50"
          tabindex="0"
        ></div>
      </div>
    </transition>
    <aside
      class="transform top-0 left-0 w-3/4 bg-white fixed h-full overflow-auto  select-none ease-in-out transition-all duration-300 z-30"
      :class="definitionModal ? 'translate-x-0' : '-translate-x-full'"
    >
      <p class="p-10">
          {{ definitionModal }} <br>
          blanditiis. Facere dolores inventore, laudantium quibusdam dolor itaque
          similique qui rerum placeat harum. Qui nobis magnam architecto numquam
          recusandae, amet totam temporibus eligendi, minima laboriosam commodi
          sequi tempora ipsum cupiditate voluptatum! Repellendus nam unde quidem,
          recusandae totam ex expedita, saepe id in est itaque, cumque error? Iure
          nobis enim a culpa ex rem fugiat. Deserunt sequi porro ducimus? Maxime,
          dolores! Blanditiis! Vitae corrupti, facere cum minima neque iusto eaque
      </p>
    </aside>
  </nav>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex';
  export default {
    /*  props: {
      chapters: {
        type: Array,
        default: null,
        required: true
      }
    }, */
    data() {
      return {
        // definitionModal: true
      };
    },
    computed: {
      ...mapGetters(['definitionModal'])
    },
    methods: {
      ...mapMutations(['UPDATE_DEFINITION_MODAL']),
      drawer() {
        this.UPDATE_DEFINITION_MODAL(false);
      }
    },
    watch: {
      definitionModal: {
        immediate: true,
        handler(definitionModal) {
          if (process.client) {
            if (definitionModal)
              document.body.style.setProperty('overflow', 'hidden');
            else document.body.style.removeProperty('overflow');
          }
        }
      }
    },
    mounted() {
      document.addEventListener('keydown', (e) => {
        if (e.keyCode == 27 && this.definitionModal)
          this.UPDATE_DEFINITION_MODAL(false);
      });
    }
  };
</script>
