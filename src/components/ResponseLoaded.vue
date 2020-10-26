<template>
    <div>
        <LyricsMain :artist=this.artist :song=this.song />
        <button v-on:click="goBack">GOBACK</button>
    </div>
</template>

<script>

import LyricsMain from './LyricsMain';

export default {
  name: 'NotLoaded',
  components: {
      LyricsMain,
  },
  props: {
      artist: String,
      song: String,
      loaded: Boolean,
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
    goBack() {
    //Send an action trigger and "state" back to parent
      this.$emit('goBack');
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../assets/css/Main.css';
</style>
