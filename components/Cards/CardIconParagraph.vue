<template>
  <div
    class="cardIconParagraph lg:flex-1 flex flex-none w-full max-w-xl px-3 mx-auto"
  >
    <div
      class="relative flex flex-col items-center w-full min-w-0 px-4 py-5 break-words bg-white rounded-lg shadow-lg"
    >
      <icon-circle :icon="icon" />
      <h6 class="text-3xl">{{ box.header }}</h6>
      <p class="">{{ box.body }}</p>
    </div>
  </div>
  {{ box }}{{ icon }}
</template>

<script>
import IconCircle from "../Icons/IconCircle.vue";
import "./cardIconParagraph.scss";

export default {
  name: "CardIconParagraph",
  components: { IconCircle },

  props: {
    box: {
      type: Object,
      default() {
        return {};
      },
    },
    icon: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
