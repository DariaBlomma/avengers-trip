<template>
    <header
        class="header"
    >
        <slot name="left-icon">
            <div class="left-icon">
                <img class="icon left-icon__img" src="~/assets/images/coin.png">
                <span class="left-icon__amount">{{coinsNumber}}</span>
                <span class="left-icon__label">on this page</span>
            </div>
        </slot>
        <h1 class="primary-title heading">
            <slot>
                <span class="heading__trip-name">Avengers </span>
                <span class="heading__trip-year">{{ new Date().getFullYear() }}</span>
            </slot>
        </h1>
        <NuxtLink to="/profile" class="icon right-icon" />
    </header>
</template>

<script setup lang="ts">
interface Props {
  coinsNumber: number,
}
const props = defineProps<Props>();
const { coinsNumber } = reactive(props);
</script>

<style scoped lang="scss">
.header {
  /* Позиционирование */
  position: relative;
  z-index: 1;

  /* Блочная модель */
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding-left: 20px;
  padding-right: 20px;

  /* Оформление */
  color: white;
}

.icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.left-icon {
  display: flex;
  align-items: center;

  &__img {
    margin-right: 20px;
    box-shadow: $shadowed-picture;
  }

  &__amount {
    /* Блочная модель */
    margin-right: 15px;

    /* Типографика */
    font-size: larger;
    font-weight: bold;

    /* Оформление */
    color: white;
    filter: drop-shadow(0 0 3px rgba(0,0,0,0.5));
  }
}

.heading {
  display: flex;
  justify-content: space-between;
  flex-basis: 600px;
  margin-right: 4em;
}

.right-icon {
  background-image: url('~/assets/images/user.png');
  background-position: center center;
  background-size: cover;
  border: 1px solid black;
  box-shadow: $shadowed-picture;
}

@media (max-width: 1110px) {
  .heading {
    flex-basis: 500px;
  }
}

@media (max-width: 1020px) {
  .left-icon {
    &__label {
      display: none;
    }

    &__amount {
      font-size: 1.5rem;
    }
  }
}

@media (max-width: 960px) {
  .heading {
    flex-basis: 450px;
    margin-right: 3em;
  }
}

@media (max-width: 770px) {
  .heading {
    flex-basis: 260px;
    margin-right: 0em;
  }
}

@media (max-width: 460px) {
  .heading {
    max-width: fit-content;

    &__trip-year {
      display: none;
    }
  }
}

@media (max-width: 375px) {
  .header {
    padding: 0 10px;
  }
}
</style>
