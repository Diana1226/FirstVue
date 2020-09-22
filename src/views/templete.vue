<template>
  <div class="playground"></div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
}
  methods: {
    reverseMessage: function() {
        .split("")
        .reverse()
        .join("");
    }
  }
};
</script>
<style lang="scss" scoped>
.playground {
}
</style>
