<script setup>
import { ref, onMounted } from 'vue';

const cookies = ref(0);
const timeLeft = ref(60);
let timer = null;

const clickCookie = () => {
  if (timeLeft.value > 0) {
    cookies.value++;
  }
};

const startTimer = () => {
  timer = setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value--;
    } else {
      clearInterval(timer);
    }
  }, 1000);
};

const restartGame = () => {
  cookies.value = 0;
  timeLeft.value = 60;
  startTimer();
};

onMounted(() => {
  startTimer();
});
</script>

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
