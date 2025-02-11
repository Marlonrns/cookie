<template>
  <div id="app">
    <h1>Cookie Clicker</h1>
    <p>Time Left: {{ timeLeft }}s</p>
    <button @click="clickCookie" :disabled="timeLeft === 0">
      🍪 Click the Cookie
    </button>
    <p>Cookies: {{ cookies }}</p>
    <button v-if="timeLeft === 0" @click="restartGame">Restart</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cookies: 0,
      timeLeft: 60,
      timer: null,
    };
  },
  methods: {
    clickCookie() {
      if (this.timeLeft > 0) {
        this.cookies++;
      }
    },
    startTimer() {
      this.timer = setInterval(() => {
        if (this.timeLeft > 0) {
          this.timeLeft--;
        } else {
          clearInterval(this.timer);
        }
      }, 1000);
    },
    restartGame() {
      this.cookies = 0;
      this.timeLeft = 60;
      this.startTimer();
    }
  },
  mounted() {
    this.startTimer();
  }
};
</script>

<style>
#app {
  text-align: center;
  font-family: Arial, sans-serif;
}
button {
  font-size: 18px;
  padding: 10px;
  margin: 10px;
}
</style>
