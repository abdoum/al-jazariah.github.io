<template>
  <div>
    <div
      class="flex flex-col"
      v-for="(c, i) in chapters"
      :key="i"
    >
      <div class="m-auto">
        <h1
          class="font-body text-center title text-3xl text-gray-700 sm:text-5xl py-10 print:pt-0"
          :data-starttime="c.startTime"
        >
          {{ c.content }}
        </h1>
      </div>
      <div
        v-for="v in c.vers"
        :key="v.id"
        class="vers font-body cursor-pointer m-auto mx-4 sm:mx-48 grid grid-cols-2 gap-10 sm:gap-20 py-3 transition duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-105 active:scale-110  focus:-translate-y-1"
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
          class="text-xl -ml-32 sm:-ml-40 xs:whitespace-no-wrap"
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
          class="text-xl pt-20 -mr-32 sm:-mr-48 whitespace-pre-wrap sm:whitespace-normal"
          v-html="v.content.split('-')[1]"
          :data-start="v.startTime"
        ></div>
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
        "sm:text-2xl": true,
        "text-xs": true,
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
div + .vers > div::after {
  content: "";
  display: inline-block;
  width: 100%;
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
