// creo la mia lista di oggetti
const list = [
  {
    text: "fare la spesa",
    done: false,
  },
  {
    text: "portare a spasso il cane",
    done: false,
  },
  {
    text: "fare allenamento",
    done: false,
  },
];

const { createApp } = Vue;

createApp({
  data() {
    return {
      list,
    };
  },
  methods: {
    getCrossClass(index) {
      document.getElementById("mytext").classList.toggle("cross-text");
    },
  },
}).mount("#app");
