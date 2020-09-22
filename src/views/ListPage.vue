<template>
  <div class="ListPage">
    <h1>List Page</h1>
    <ul id="example-1">
      <li v-for="(item, i) in items" :key="i">{{item.message}}</li>
    </ul>
    <ul id="v-for-object" class="demo">
      <li v-for="(value, name) in object" :key="name">{{name}} : {{value}}</li>
    </ul>
    <li v-for="(n,i) in evenNumbers" :key="i">{{ n }}</li>
    <span v-for="n in 10" :key="n">{{ n }}</span>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "ListPage",
  component: {},
  data() {
    return {
      items: [{ message: "Foo" }, { message: "Bar" }],
      object: {
        title: "How to do lists in Vue",
        author: "jane Doe",
        puvlishedAt: "2016-4-10"
      },
      numbers: [1, 2, 3, 4, 5]
    };
  },
  computed: {
    evenNumbers: function() {
      return this.numbers.filter(function(number) {
        return number % 2 === 0;
      });
    }
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
//scoped가 다른 css 파일에 영향을 끼치지 않는다.
</style>