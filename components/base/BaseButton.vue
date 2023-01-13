<template>
    <button
        class="button"
        :class="theme"
    >
        <span class="title-3 label">Choose</span>
    </button>
</template>

<script setup lang="ts">
import type { ButtonTheme } from '~/types';
interface Props {
  theme?: ButtonTheme,
}
const props = withDefaults(defineProps<Props>(), {
  theme: 'striped',
});
const { theme } = reactive(props);
</script>

<style scoped lang="scss">
.label {
  font-weight: 700;
  font-size: 16px;
}

.striped {
  width: 140px;
  height: 48px;
  border: $card-dark-border;
  border-radius: 48px;
  background: $striped-button-background;
  box-shadow: $card-inner-shadow;

  &:hover {
    background: $striped-button-hover-background;
  }

  &:active {
    background: $striped-button-active-background;
  }

  &:focus {
    outline: none;
  }
}

@media (max-width: 375px) {
  .striped {
    width: 120px;
    height: 40px;

    &:hover, &:active {
      background: $striped-button-active-background;
    }
  }
}
</style>
