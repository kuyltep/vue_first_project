<template>
  <div class="card">
    <h1 :style="{
      color: inputValue.length < 5 ? 'red' : 'green',
      fontSize: inputValue.length < 5 ? '2rem' : '1.5rem',
    }">
      {{ title }}
    </h1>
    <div class="form-control">
      <input :placeholder="placeholder" v-model="inputValue" @keypress.enter="makeItem" type="text" name="" id="" />
    </div>
    <button @submit.prevent @click="makeItem" class="btn">Add</button>
    <hr />
    <ul class="list" v-if="notes.length !== 0">
      <li v-for="(note, index) in notes" :key="index" class="list-item">
        <span :class="['bold', { primary: note.length > 5 }]">{{
          toUpperCase(note)
        }}</span>
        <button @click="removeNote(index)" class="btn danger">Delete</button>
      </li>
      <hr />
      <li>
        <strong>Total count : {{ notes.length }}</strong> | Double count:
        {{ doubleCountComputed }}
      </li>
    </ul>
    <div v-else>No notes. Add first note</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      counter: 0,
      title: "List",
      placeholder: "Input title",
      inputValue: "",
      notes: [],
    };
  },
  methods: {
    makeItem() {
      if (this.inputValue.length > 0) {
        this.notes.push(this.inputValue);
        this.inputValue = "";
      }
    },

    toUpperCase(item) {
      return item.toUpperCase();
    },
    removeNote(index) {
      this.notes.splice(index, 1);
    },
  },
  computed: {
    doubleCountComputed() {
      return this.notes.length * 2;
    },
  },
  watch: {
    inputValue(value) {
      if (value.length > 10) {
        this.inputValue = "";
      }
      console.log("Current input value: ", value);
    },
  },
};
</script>
<style scoped>
@import '@/assets/home.css';
</style>