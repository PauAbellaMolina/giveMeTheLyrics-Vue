async function fetchData() {
    const res = await fetch(`https://api.lyrics.ovh/v1/` + this.artist +`/` + this.song);
    const data = await res.json();
    return data;
}

export default fetchData;