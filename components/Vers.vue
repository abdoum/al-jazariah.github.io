<template>
  <div class="">
    <div
      class="grid grid-cols-2 place-content-center"
      v-for="(c, i) in chapters"
      :key="i"
    >
      <div class="col-span-2">
        <h1
          class="font-body text-center title text-3xl text-gray-700 sm:text-5xl py-10 pb-20 print:pt-0"
          :data-starttime="c.startTime"
        >
          {{ c.content }}
        </h1>
      </div>
      <div class="col-span-2 space-y-4  mx-auto">
          <div
            v-for="v in c.vers"
            :key="v.id"
            class="vers font-body cursor-pointer transition duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-105 active:scale-110 focus:-translate-y-1"
            :class="{
              'scale-105': v.id === currentLine.id
            }"
          >
            <div
              :class="{
                'text-blue-600':
                  v.id === currentLine.id && currentTimecode < secondHalfStartTime,
                ...versTdClasses
              }"
              :data-startTime="v.startTime"
              v-html="v.content.split('-')[0]"
              :data-start="v.startTime"
            ></div>
            <div
              :class="{
                'text-blue-600':
                  v.id === currentLine.id && currentTimecode > secondHalfStartTime,
                ...versTdClasses
              }"
              v-html="v.content.split('-')[1]"
              :data-start="v.startTime"
            ></div>
          </div>
      </div>
    </div>
    <PlaybackControl class="d-print-none" :time="userTimeRequest" />
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
    }
  },
  data() {
    return {
      versTdClasses: {
        "text-gray-900": true,
        "sm:text-3xl": true,
        "text-lg": true,
        "text-justify": true,
        // "sm:leading-10": true,
        // "leading-1": true,
        // "sm:pt-12": true,
        // "pt-6": true,
        // "print:pt-0": true,
        // "overflow-x-auto": true,
        "print:overflow-hidden": true,
        "select-all": true,
        // "whitespace-nowrap": true,
        // "w-2/5": true,
        poeme: true
      }
    };
  }
};
</script>

<style>
.red {
  color: #840032;
}
.vers > div::after {
  content: "";
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
