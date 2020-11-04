<template>
    <div class="Main">
      <Header :title=title />
      <div class="d-flex justify-content-center w-100" v-if="!loaded">
        <NotLoaded @handleSubmit="handleSubmit" />
      </div>
      <div v-else>
        <ResponseLoaded @goBack="goBack" :artist="artist" :song="song" :loaded="loaded" />
      </div>
    </div>
</template>

<script>
  import Header from './Header';
  import NotLoaded from './NotLoaded';
  import ResponseLoaded from './ResponseLoaded';

  export default {
    name: 'Main',
    components: {
      Header,
      NotLoaded,
      ResponseLoaded,
    },
    data() {
      return {
        title: "GIVEMETHELYRICS",
        artist: "",
        song: "",
        loaded: false,
        access_token: ""
      }
    },
    methods: {
      handleSubmit(data) {
        this.artist = data.artist;
        this.song = data.song;
        this.title = data.title;
        this.loaded = data.loaded;
      },
      goBack() {
        history.replaceState(null, null, ' ');
        this.artist = "";
        this.song = "";
        this.title = "GIVEMETHELYRICS";
        this.loaded = false;
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../assets/css/Main.css';
</style>
