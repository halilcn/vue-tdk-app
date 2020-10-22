<template>
  <div>
    <transition-group name="results-list" v-if="results" tag="ul" class="results" mode="out-in">
      <li v-for="(result,index) in results.anlamlarListe" :key="index">
        <span class="index">
          {{ index + 1 }}
        </span>
        <span class="mean">
          {{ result.anlam }}
        </span>
        <div class="example" v-for="resultExample in result.orneklerListe">
          <span class="content">
           Örn:{{ resultExample.ornek }}
          </span>
          <span class="writer" v-if="resultExample.yazar">
            <i class="fas fa-pencil-alt"></i>
              {{ resultExample.yazar[0].tam_adi }}
          </span>
          <span class="writer" v-else>
            Anonim
          </span>
        </div>
      </li>
    </transition-group>
    <div v-else>yok</div>
    <!--<li v-else>
      Böyle bir kelime yok.
    </li>-->
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

.results li {
  margin-top: 10px;
  border: 1px solid #ffebeb;
  background-color: #fff9f9;
  border-radius: 3px;
  padding: 7px;
  position: relative;
}

.results li .index {
  font-family: 'Sansita Swashed', cursive;
  font-size: 12px;
  position: absolute;
  left: -20px;
  top: 0px;
  background-color: #f5f5f5;
  padding: 5px;
  border-radius: 20px;
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
