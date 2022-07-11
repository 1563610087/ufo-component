<template>
  <div class="container">
    {{ name }}22
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {}
  },
  watch: {},
  methods: {},
}
</script>
<style scoped>
.container{
  width: 300px;
}
</style>
