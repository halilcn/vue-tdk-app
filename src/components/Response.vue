<template>
  <div>
    <transition-group name="results-list" tag="ul" class="results" mode="out-in">
      <li v-for="(result,index) in results.anlamlarListe" :key="index">
        <span class="index">
          {{ index + 1 }}
        </span>
        <span class="mean">
          {{ result.anlam }}
        </span>
        <div v-for="resultExample in result.orneklerListe" class="example">
          <span class="content">
           {{ resultExample.ornek }}
          </span>
          <span class="writer" v-if="resultExample.yazar">
              - {{ resultExample.yazar[0].tam_adi }}
          </span>
          <span class="writer" v-else>
            Anonim
          </span>
        </div>
      </li>
      <li class="results_error" v-if="results==='0'">
        <i style="padding-right: 3px;" class="fas fa-exclamation-circle"></i>
        Böyle bir kelime yok.
      </li>
      <li class="results_error" v-if="results === 'null'">
        <i class="fas fa-times"></i>
        Kelime alanı boş bırakılamaz.
      </li>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Response',
  computed: {
    ...mapGetters(['results'])
  }
}
</script>

<style scoped>
.results {
  padding: 0px;
  width: 50%;
  margin: 10px auto;
  list-style-type: none;
}

.results .results_error {
  color: #ea2929;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
}

.results li {
  margin-top: 10px;
  border: 1px solid #ffebeb;
  background-color: #fff9f9;
  border-radius: 3px;
  padding: 6px;
  position: relative;
}

.results li .index {
  font-family: 'Sansita Swashed', cursive;
  font-size: 12px;
  position: absolute;
  left: -20px;
  top: 0px;
  color: #e72d2d;
}

.results li .mean {
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  color: #000000;
}

.results li .example {
  display: flex;
  flex-direction: column;
  margin-top: 5px;
}

.results li .example > .content {
  font-family: 'Open Sans', sans-serif;
  font-size: 13px;
  color: #292929;
}

.results li .example > .writer {
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  color: #676767
}

.word_null_warning {
  width: 50%;
  margin: 0px auto;
}

.results-list-enter-active {
  position: relative;
  animation: results-list-enter ease-in-out .5s forwards;
}

.results-list-leave-active {
  position: relative;
  animation: results-list-leave ease-in-out .5s forwards;
}

@keyframes results-list-enter {
  from {
    opacity: 0;
    top: 20px;
  }
  to {
    opacity: 1;
    top: 0px;
  }
}

@keyframes results-list-leave {
  from {
    opacity: 1;
    top: 0px;
  }
  to {
    opacity: 0;
    top: 20px;
  }
}
</style>
