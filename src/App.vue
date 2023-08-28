<template>
  <div class="app">
    <header>
      <h1>The<strong>Anime</strong>Database</h1>
      <form class="search-box" @submit.prevent="HandleSearch">
        <input
            type="search"
            class="search-field"
            placeholder="Search for an anime..."
            required
            v-model="search_query" />
      </form>
    </header>
    <main>
      <div class="cards" v-if="animelist.length > 0">
        <AnimeCard
            v-for="anime in animelist"
            :key="anime.mal_id"
            :anime="anime" />
      </div>
      <div class="no-results" v-else>
        <h3>Sorry, we have no results...</h3>
      </div>
    </main>
  </div>
</template>

<script>
import {onMounted, ref} from 'vue';
import AnimeCard from "@/components/AnimeCard.vue";
import {searchAnime} from "@/service/JikanApi";

export default {
  components: {AnimeCard},
  setup() {
    const search_query = ref("");
    const animelist = ref([]);

    onMounted( async () => {
      animelist.value = await searchAnime(`anime?q=fullmetal`)
    })

    const HandleSearch = async () => {
      animelist.value = await searchAnime(`anime?q=${search_query.value}`)
      search_query.value = "";
    }

    return {
      AnimeCard,
      search_query,
      animelist,
      HandleSearch
    }
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  font-family: 'Fira Sans', sans-serif;
}

a {
  text-decoration: none;
}

.app {
  background-color: rgba(9, 8, 13, 1);
}

header {
  padding-top: 50px;
  padding-bottom: 50px;

  h1 {
    color: rgba(234, 232, 254, 1);
    font-size: 42px;
    font-weight: 400;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    strong {
      color: rgba(22, 186, 68, 1);
    }
  }

  .search-box {
    display: flex;
    justify-content: center;
    padding-left: 30px;
    padding-right: 30px;

    .search-field {
      appearance: none;
      border: none;
      outline: none;

      background-color: rgba(70, 67, 76, 1);

      display: block;
      width: 100%;
      max-width: 600px;
      padding: 15px;
      border-radius: 8px;

      color: #313131;
      font-size: 20px;

      transition: 0.4s;

      &::placeholder {
        color: #AAA;
      }

      &:focus, &:valid {
        color: #FFF;
        background-color: #313131;
        box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.15);
      }
    }
  }
}

main {
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 30px;
  padding-right: 30px;

  .cards {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
}
</style>