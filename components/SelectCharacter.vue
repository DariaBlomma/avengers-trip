<template>
    <div class="wrapper wrapper_left">
        <h3 class="title-3 wrapper__title">More about</h3>
        <select class="wrapper__select">
            <option
                v-for="item in charactersShortInfoList"
                :key="item.title"
            >
                {{item.title}}
            </option>
        </select>
    </div>
</template>

<script setup lang="ts">
import { charactersShortInfoList } from '../constants';
</script>

<style scoped lang="scss">
.wrapper {
  position: absolute;
  top: 120px;
  left: 20px;
  z-index: 2;
  max-width: 150px;
  padding: 15px;
  margin-left: 25px;
  text-align: center;
  background-color: $card-light-gray-background;
  border: $card-dark-border;
  border-radius: $card-border-radius;
  box-shadow: $card-inner-shadow;

  &__title {
    margin: 8px 0 15px;
  }

  &__select {
    width: 100%;
  }
}


@media (max-width: 375px) {
  .wrapper {
    max-width: 130px;
  }
}
</style>
