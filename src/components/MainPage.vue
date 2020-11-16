<template>
  <div class="container">
    <div class="title">
      TDK SÖZLÜK
    </div>
    <div class="row">
      <div class="search_content">
        <input placeholder="Bir kelime yaz..." v-model="word" @keypress.enter="wordPost" type="text">
        <button @click.prevent="wordPost">
          ara
          <i class="fas fa-search"></i>
        </button>
      </div>
      <div class="random_word">
        <button @click="randomWordSearch">
          Rastgele Kelime
        </button>
      </div>
    </div>
    <response/>
  </div>
</template>

<script>
import Response from '@/components/Response'
import RandomWords from '../../RandomWords.js'

export default {
  data () {
    return {
      word: '',
      words: [],
      randomNumber: null
    }
  },
  components: {
    Response
  },
  methods: {
    wordPost () {
      this.$store.dispatch('wordPost', this.word)
    },
    randomWordSearch () {
      this.words = RandomWords
      this.randomNumber = Math.ceil(Math.random() * 25)
      this.$store.dispatch('wordPost', this.words[this.randomNumber])
      this.word = this.words[this.randomNumber]
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
  display: flex;
  flex-direction: column;
}

.container .title {
  font-size: 40px;
  font-family: 'Noto Sans', sans-serif;
  text-align: center;
}

.row {
  display: flex;
  align-self: center;
  align-items: center;
  margin-top: 50px;
}

.row .search_content {
  display: flex;
  justify-content: center;
}

.search_content input {
  font-family: 'Montserrat', sans-serif;
  width: 300px;
  padding: 10px;
  border: 1px solid transparent;
  border-bottom-color: #ffc6c6;
  transition: .3s;
}

.search_content input:focus {
  border-bottom-color: #ff8d8d;
  outline: none;
}

.search_content button {
  padding: 5px 10px;
  background-color: transparent;
  border: 0px;
  border-radius: 3px;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
}

.search_content button:hover {
  background-color: #fff7f7;
}

.row .random_word {
  margin-left: 90px;
}

.random_word button {
  background-color: #1993e5;
  color: white;
  padding: 5px;
  border: 0px;
  border-radius: 3px;
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;
  outline: none;
}

</style>
