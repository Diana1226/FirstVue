<template>
  <div class="forif">
    <h1>New For / If page</h1>
    <h1 v-if="awesome">Vue is Visible</h1>
    <h1 v-if="!awesome">Vue is unvisible</h1>
    <h2 v-else-if="isElse">This is Else If</h2>
    <h1 v-else>Oh no!</h1>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "ForIf",
  component: {},
  date() {
    return { awesome: true };
  },
  computed: {},
  methods: {}
};
</script>
<style lang="scss" scoped>
//scoped가 다른 css 파일에 영향을 끼치지 않는다.
</style>