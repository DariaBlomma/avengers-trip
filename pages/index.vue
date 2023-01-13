<template>
  <div class="page index-page">
    <PageHeader
        :coinsNumber=1
    />
    <SelectCharacter />
      <div class="characters-info">
        <CharacterCard
            v-for="item in charactersShortInfoList"
            :key="item.title"
            :title="item.title"
            :description="item.text"
        />
      </div>
  </div>
</template>

<script setup lang="ts">
import { charactersShortInfoList } from '~/constants';
</script>

<style lang="scss">
@import '~/assets/styles/global.scss';
@import '~/assets/styles/titles.scss';
</style>

<style scoped lang="scss">
.index-page {
  height: 100vh;
  background-image: url('~/assets/images/backgrounds/avengers.jpg'), url('~/assets/images/backgrounds/avengers.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center, center 10px;
  padding: 25px;
}

.characters-info {
  position: relative;
  z-index: 1;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(10,1fr);
  grid-template-rows: repeat(5, min-content);
  grid-template-areas:
    '. . thanos thanos  . . . . strange strange'
    'captain captain captain . . . thor thor strange strange'
    'blackWidow blackWidow blackWidow blackWidow . . . starLord starLord starLord';
}

@media (max-width: 770px) {
  .index-page {
    background-image: url('~/assets/images/backgrounds/avengers_mobile.jpg');
    background-position-y: top;
  }
}
</style>
