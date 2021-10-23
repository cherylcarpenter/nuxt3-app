<template>
  <div>
    <Head>
      <Title>{{ data.title }}</Title>
      <Meta name="description" :content="`${data.seo.description}`" />
    </Head>
    <h1>{{ data.title }}</h1>
    <section-loader
      v-for="(section, index) in data.sections"
      :key="`${section}${index}`"
      :section-type="section.type"
      :section-content="section"
    />
  </div>
</template>

<script setup>
const { data } = await useFetch("/api/home", {
  defer: true,
});
</script>
