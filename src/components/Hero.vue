<template>
  <section class="hero is-fullheight video">
    <div class="hero-video">
        <video id="bgvid" autoplay muted loop>
            <source src="../assets/rain_bw.mp4" type="video/mp4">
        </video>
    </div>
    <div class="hero-body">
      <div id="tilt-player" v-tilt class="container">
        <div class="has-text-centered"> 
          <h1 class="title">{{ title }}</h1> 
          <p class="subtitle">{{ msg }}</p>
        <audio controls src="../assets/lanoire.mp3">
          Your browser does not support the <code>audio</code> element.
        </audio>
        </div>
      </div>
    </div>
  </section>


</template>

<script>

export default {
  name: 'Hero',
  props: {
    title: String,
    msg: String
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display+SC:wght@700&display=swap');

  * {
    box-sizing: border-box;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-kerning: auto;
  }

  html {
    font-family: sans-serif;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
  }

  h1 {
    color: #fff;
    font-family: 'Playfair Display SC', serif;
    font-size: 6vw !important;
    text-shadow: 0 1px 0 #ccc, 
                  0 2px 0 #c9c9c9,
                  0 3px 0 #bbb,
                  0 4px 0 #b9b9b9,
                  0 5px 0 #aaa,
                  0 6px 1px rgba(0,0,0,.1),
                  0 0 5px rgba(0,0,0,.1),
                  0 1px 3px rgba(0,0,0,.3),
                  0 3px 5px rgba(0,0,0,.2),
                  0 5px 10px rgba(0,0,0,.25),
                  0 10px 10px rgba(0,0,0,.2),
                  0 20px 20px rgba(0,0,0,.15);
  }

  p {
    color: #fff;
    font-family: Tahoma;
    font-size: 2vw;
    text-shadow: 0px 4px 3px rgba(0,0,0,0.4),
                0px 8px 13px rgba(0,0,0,0.1),
                0px 18px 23px rgba(0,0,0,0.1);
  }

  .video {
    background: url('../assets/preview.png');
    background-repeat:no-repeat;
    -webkit-background-size:cover;
    -moz-background-size:cover;
    -o-background-size:cover;
    background-size:cover;
    background-position:center;
  }

  #tilt-player {
    padding: 7vw;
    /* border-radius: 25px;
    background-color: yellow; */
  }


</style>
