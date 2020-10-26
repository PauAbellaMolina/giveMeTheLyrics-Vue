<template>
    <!-- <LyricsMain artist={artist} song={song} /> -->
    <div class="lyricsComponent" v-if=fetched>
        {{Object.values(response)[0]}}
    </div>
    <div class="fetching" v-else>
        ···
    </div>
</template>

<script>

export default {
  name: 'NotLoaded',
  components: {
  },
  props: {
      artist: String,
      song: String,
  },
  data() {
    return {
        fetched: false,
        response: "",
    }
  },
  beforeMount() {
      this.fetchData();
  },
  methods: {
      async fetchData() {
          const res = await fetch(`https://api.lyrics.ovh/v1/` + this.artist +`/` + this.song);
          const data = await res.json();
          this.response = data;
          this.fetched = true;
      }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../assets/css/Main.css';
</style>
