<template>
    <form method="post" v-on:submit="handleSubmit">
        <input v-model="data.artist" type="text" pattern="[.'a-zA-Z0-9- ]+" name="artistInput" ref="artist" placeholder="ARTIST" required />
        <input v-model="data.song" type="text" pattern="[.'a-zA-Z0-9- ]+" name="songInput" ref="song" placeholder="SONG" required />
        <button>GO!</button>
    </form>
</template>

<script>

export default {
  name: 'NotLoaded',
  components: {
  },
  data() {
    return {
        data: [
            {title: "GIVEMETHELYRICS"},
            {artist: ""},
            {song: ""},
            {loaded: false},
        ]
    }
  },
  methods: {
    handleSubmit() {
    //Update "state" with the submited form values
      this.data.title = this.data.song;
      this.data.loaded = true;

    //Send an action trigger and "state" back to parent
      this.$emit('handleSubmit', this.data);
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../assets/css/Main.css';
</style>
