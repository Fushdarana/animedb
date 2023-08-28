<template>
  <div class="card">
    <a
        :href="anime.url"
        class="cards_wrapper-card"
        target="_blank">
      <img
          :src="anime.images.jpg.image_url"
          :alt="anime.title + ' Poster'"
      />
      <h3>{{ anime.title }}</h3>
    </a>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from 'vue'

type Anime = {
  mal_id: number,
  title: string,
  url: string,
  images: {
    jpg: {
      image_url: string
    }
  }
}

const props = defineProps<{
  anime: Anime
}>()
</script>

<style lang="scss" scoped>
.card {
  flex: 1 1 20%;
  max-width: 20%;
  height: auto;
  max-height: 400px;
  transition: .4s;
  margin: 16px;
  border-radius: 5px;
  background-color: rgba(54, 52, 59, 1);

  @media (max-width: 992px) {
    max-height: 600px;
    max-width: 30%;
  }

  @media (max-width: 576px) {
    max-height: 500px;
    min-width: 300px;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(99, 55, 195, 1)
  }

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }

  h3 {
    padding: 16px;
    color: rgba(186, 184, 208, 0.6);

    &:hover {
      color: #24C444;
    }
  }
}

</style>
