<template>
  <div class="container">
    <div class="title">
      TDK SÖZLÜK
    </div>
    <div class="search_content">
      <input v-model="word" @keypress.enter="wordPost" type="text">
      <button @click.prevent="wordPost">Ara</button>
    </div>
    <response/>
  </div>
</template>

<script>
import Response from '@/components/Response'

export default {
  data () {
    return {
      word: ''
    }
  },
  components: {
    Response
  },
  methods: {
    wordPost () {
      this.$store.dispatch('wordPost', this.word)
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Sansita+Swashed:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@1,300&display=swap');

body {
  background-color: #fcfcfc;
}

.container {

}

.container .title {
  font-size: 40px;
  font-family: 'Noto Sans', sans-serif;
  text-align: center;
}

.search_content {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}

.search_content input {
  font-family: 'Montserrat', sans-serif;
  width: 300px;
  padding: 10px;
  border: 1px solid transparent;
  border-bottom-color: #ec4646;
  transition: .3s;
}

.search_content input:focus {
  border-color: red;
  background-color: #f6f6f6;
  outline: none;
}

.search_content button {
  padding: 5px 15px;
  background-color: transparent;
  border: 0px;
  cursor: pointer;
}
</style>
