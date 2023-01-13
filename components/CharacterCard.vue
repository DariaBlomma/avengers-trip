<template>
    <div
        class="card"
        :class="uniqueClass"
    >
        <h2 class="secondary-title">{{title}} </h2>
        <p class="card__description">{{description}}</p>
        <BaseButton />
    </div>
</template>

<script setup lang="ts">
interface Props {
  title: string,
  description: string,
}
const props = defineProps<Props>();
const { title, description } = reactive(props);

// преобразует имя из Iron Man в iron-man
const complexNameParser = (match, g1: string, g2: string) => {
    g1 = '-';
    return `${g1}${g2.trim().toLowerCase()}`;
};

const uniqueClass = computed<string>(() => {
  const reg = /([.?\s*])(.)/g;
  return `${title.trim().toLowerCase().replace(reg, complexNameParser)}-info`;
});
</script>

<style scoped lang="scss">
$block: '.card';
#{$block} {
    justify-items: center;
    padding: 15px;
    text-align: center;
    border: $card-dark-border;
    border-radius: $card-border-radius;
    box-shadow: $card-inner-shadow;
    background-color: $card-light-gray-background;

  &__desciption {
    margin: 5px 0;
  }
}

.thanos-info {
  grid-area: thanos;
}

.iron-man-info {
  grid-area: thanos;
}

.dr-stephen-strange-info {
  grid-area: strange;
}

.captain-america-info {
  grid-area: captain;
}

.thor-info {
  grid-area: thor;
}

.star-lord-info {
  grid-area: starLord;
}

.black-widow-info {
  grid-area: blackWidow;
}

.hulk-info {
  grid-area: captain;
}

.gamora-info {
  grid-area: starLord;
}

.spiderman-info {
  grid-area: blackWidow;
}

@media (max-width: 375px) {
  #{$block} {
    grid-template-rows: repeat(2, min-content);
    grid-template-areas:
        'thanos thanos thanos thanos  strange strange strange strange strange strange'
        'thor thor thor thor thor captain captain captain captain captain';

    &__description {
      font-size: 0.8em;
    }
  }

  /* это меняется при выборе option  из select, некоторые элементы встают на место предыдущих */
  .iron-man-info {
    grid-area: captain;
  }

  .star-lord-info {
    grid-area: captain;
  }

  .black-widow-info {
    grid-area: thor;
  }

  .gamora-info {
    grid-area: thor;
  }

  .hulk-info {
    grid-area: captain;
  }

  .spiderman-info {
    grid-area: thor;
  }
}
</style>
