// creo la mia lista di oggetti
const list = [
  {
    text: "fare la spesa",
    done: true,
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
      newTask: "",
    };
  },
  methods: {
    deleteItem(index) {
      this.list.splice(index, 1);
    },

    addCrossClass(index) {
      if (this.list[index].done == true) {
        this.list[index].done = false;
      } else {
        this.list[index].done = true;
      }
    },

    addNewTask(newTask) {
      const newTaskObj = {
        text: newTask,
        done: false,
      };

      this.list.push(newTaskObj);

      this.newTask = "";
    },
  },
}).mount("#app");
