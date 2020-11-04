<template>
    <form method="post" v-on:submit="handleSubmit">
        <input v-model="data.artist" type="text" pattern="[.'a-zA-Z0-9- ]+" name="artistInput" ref="artist" placeholder="ARTIST" required />
        <input v-model="data.song" type="text" pattern="[.'a-zA-Z0-9- ]+" name="songInput" ref="song" placeholder="SONG" required />
        <span class="d-flex justify-content-center">
          <p v-on:click="loginSpotify" class="text-center col-md-5 p-2">Connect to Spotify</p>
        </span>
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
          {access_token: ""},
        ]
      }
    },
    beforeMount() {
      if(window.location.hash != "") {
        this.getAccessToken();
      }
    },
    methods: {
      handleSubmit() {
      //Update "state" with the submited form values
        this.data.title = this.data.song;
        this.data.loaded = true;

      //Send an action trigger and "state" back to parent
        this.$emit('handleSubmit', this.data);
      },
      loginSpotify() {
        /* PROD */
        window.location.href = "https://accounts.spotify.com/authorize?client_id=d93153f252164c2897ab2e626c5b6c69&redirect_uri=https://lyrics.pauabella.dev&scope=user-read-playback-state&response_type=token";
      },
      getAccessToken() {
        const queryString = window.location.hash;
        let access_token = queryString.substr(0, queryString.indexOf('&token_type=')).substr(queryString.indexOf('=')+1);

        this.data.access_token = access_token;

        this.fetch();
      },
      async fetch() {
        const headers = { "Authorization": "Bearer "+this.data.access_token }
        /* fetching artists */
        const res = await fetch(`https://api.spotify.com/v1/me/player`, { headers });
        const data = await res.json();
        this.data.artist = data.item.artists[0]['name'];
        this.data.song = data.item.name;
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
