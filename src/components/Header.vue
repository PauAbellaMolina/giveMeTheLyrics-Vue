<template>
    <div class="Header">
        <p class="redFnt">{{ title }}</p>
    </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../assets/css/Main.css';
</style>
