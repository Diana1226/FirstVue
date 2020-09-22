<template>
  <div class="EventPage">
    <h1>Event Page</h1>
    <button v-on:click="counter += 1">Add 1</button>
    <p>위 버튼을 클릭한 횟수는{{counter}}번 입니다</p>
    <button @click="greet()">Greet</button>
    <button v-on:click="say('hi')">Say hi</button>
    <button v-on:click="say('what')">Say What</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "EventPage",
  component: {},
  data() {
    return { counter: 0, name: "Vue.js" };
  },
  computed: {},
  methods: {
    greet: function(event) {
      alert("Hello" + "!");
      if (event) {
        alert(event.target.tagName);
      }
    },
    say: message => {
      alert(message);
    }
  }
};
</script>
<style lang="scss" scoped>
//scoped가 다른 css 파일에 영향을 끼치지 않는다.
</style>