<template>
  <div class="min-h-screen">
    <div
      class="grid grid-cols-2 place-content-center"
      :class="{ 'bg-gray-800 text-gray-700 transition duration-500': playback }"
    >
      <div class="col-span-2">
        <h1
          class="font-body text-center title text-3xl sm:text-5xl py-10 pb-20  text-gray-600 select-none print:pt-0"
          :class="{
            'transition duration-300 text-gray-700': playback
          }"
          :data-starttime="chapter.startTime"
        >
          {{ chapter.content }}
        </h1>
      </div>

      <div class="col-span-2 space-y-4 mx-16 sm:mx-32 md:mx-auto">
        <div
          v-for="v in chapter.vers"
          :key="v.id"
          class="vers font-body cursor-pointer "
          :class="{
            'scale-105': v.id === currentLine.id,
            'opacity-100': v.id === currentLine.id
          }"
          v-touch:touchhold="touchHoldHandler"
        >
          <div
            class="transition duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-105 active:scale-110 text-gray-700 focus:-translate-y-1"
            :class="{
              'transition duration-500 text-red-500 current-line scale-110':
                v.id === currentLine.id &&
                currentTimecode < secondHalfStartTime,
              'text-gray-700 playback': playback,
              ...versTdClasses
            }"
            :data-startTime="v.startTime"
            v-html="v.content.split('-')[0]"
            :data-start="v.startTime"
            @click="UPDATE_USER_TIME_REQUEST(v.startTime)"
            v-touch:longtap="longtapHandler"
            :data-start-time="v.startTime"
          ></div>
          <div
            class="transition duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-105 active:scale-110 text-gray-700 focus:-translate-y-1"
            :class="{
              'transition duration-500 text-red-500 current-line scale-110':
                v.id === currentLine.id &&
                currentTimecode > secondHalfStartTime,
              'text-gray-700 playback': playback,
              ...versTdClasses
            }"
            v-html="v.content.split('-')[1]"
            :data-start="v.startTime"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex';
  export default {
    props: {
      chapter: {
        type: Object,
        default: null,
        required: true
      },
      currentLine: {
        type: Object,
        default: null,
        required: false
      },
      currentTimecode: {
        type: Number,
        default: null,
        required: false
      },
      secondHalfStartTime: {
        type: Number,
        default: null,
        required: false
      },
      userTimeRequest: {
        type: Number,
        default: null,
        required: false
      },
      playback: {
        type: Boolean,
        default: null,
        required: false
      }
    },
    data() {
      return {
        versTdClasses: {
          'sm:text-3xl': true,
          'text-lg': true,
          'text-justify': true,
          'hover:text-red-500': true,
          'print:overflow-hidden': true,
          'select-none': true,
          poeme: true
        },
        swipeLeft: false,
        swipeRight: false,
        accentColorPlayback: '#4a5568',
        accentColorNoPlayback: '#cbd5e0'
      };
    },

    methods: {
      ...mapMutations(['UPDATE_USER_TIME_REQUEST', 'UPDATE_DEFINITION_MODAL']),
      longtapHandler($event) {
        const startTime =
          parseFloat($event.target.getAttribute('data-start-time')) ||
          parseFloat(
            $event.target.parentElement.getAttribute('data-start-time')
          );
        this.UPDATE_USER_TIME_REQUEST(startTime);
      },
      touchHoldHandler() {
        this.UPDATE_DEFINITION_MODAL(true);
      }
    }
  };
</script>

<style>
  div :not(.current-line) > .red {
    color: #4a5568;
  }
  div .current-line > .red {
    color: #3182ce;
  }

  .vers > div::after {
    content: '';
    display: inline-block;
    width: 100%;
    height: 2rem;
  }
  @media print {
    .d-print-none {
      display: none !important;
    }
    .title {
      page-break-after: avoid;
    }
    /* .vers {
    line-height: 0.5rem;
  } */
    @page {
      /* margin: 1cm 0.5cm 2.5cm 1cm; */
    }
  }
</style>
