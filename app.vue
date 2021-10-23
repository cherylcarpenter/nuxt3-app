<template>
  <div>
    <NuxtPage />
  </div>
</template>
<style lang="scss">
@import "/assets/scss/tailwind.scss";
</style>
<script>
export default {
  head: {
    script: [
      {
        async: true,
        src: "https://kit.fontawesome.com/4400228d2f.js",
      },
    ],
  },
};
</script>
