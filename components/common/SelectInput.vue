<template>
  <HeadlessListbox v-model="value" @update:modelValue="$emit('onChanged', value)">
    <div class="relative">
      <HeadlessListboxButton
          v-slot="{ open }"
          class="relative w-full cursor-pointer rounded-md bg-white dark:bg-black text-text-light dark:text-text-dark py-3 pl-3 pr-2 flex justify-between items-center"
      >
        <span class="truncate">{{ items[value] }}</span>
        <Icon
            :class="[open ? 'opened' : 'closed','h-5 w-5']"
            aria-hidden="true"
            name="material-symbols:keyboard-arrow-down-rounded"
        />
      </HeadlessListboxButton>

      <transition
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
      >
        <HeadlessListboxOptions
            class="absolute mt-1 w-full overflow-auto rounded-md bg-white dark:bg-black py-1"
        >
          <HeadlessListboxOption
              v-for="(value, key) in items"
              :value="key"
              as="template"
          >
            <span
                class='block truncate cursor-pointer py-2 px-3 text-text-light dark:text-text-dark hover:bg-bg-article hover:dark:bg-bg-article-dark'>{{
                value
              }}</span>
          </HeadlessListboxOption>
        </HeadlessListboxOptions>
      </transition>
    </div>
  </HeadlessListbox>
</template>

<script setup lang="ts">
import {PropType} from "vue";

const props = defineProps({
  selectedValue: {
    type: Number,
    default: 0
  },
  items: {
    type: Object as PropType<Record<number, string>>,
  }
})

const value = ref(props.selectedValue)
</script>

<style>
.opened {
  transform: rotate(-180deg);
  transition: transform 0.2s ease-out;
}

.closed {
  transform: rotate(0deg);
  transition: transform 0.2s ease-out;
}
</style>