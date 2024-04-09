<template>
  <q-page class="flex column q-pa-md q-gap">
    <span class="text-h1">Headline 1</span>
    <span class="text-h2">Headline 2</span>
    <span class="text-h3">Headline 3</span>
    <span class="text-h4">Headline 4</span>
    <span class="text-h5">Headline 5</span>
    <span class="text-h6">Headline 6</span>
    <q-separator />
    <span class="text-subtitle1">Subtitle 1</span>
    <span class="text-subtitle2">Subtitle 2</span>
    <q-separator />
    <p class="text-body1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quam
      obcaecati delectus voluptatibus dolorum hic quod perferendis ducimus
      quidem tenetur quasi nisi doloremque necessitatibus libero consequatur
      suscipit aliquid, repellat a.
    </p>
    <p class="text-body2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa placeat
      quaerat vel? Tempora, aut eius laudantium esse similique praesentium,
      assumenda voluptas molestias optio molestiae laboriosam vero cum maxime
      unde autem.
    </p>
    <q-separator />
    <span class="text-weight-thin">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa placeat
      quaerat vel? Tempora, aut eius laudantium esse similique praesentium,
      assumenda voluptas molestias optio molestiae laboriosam vero cum maxime
      unde autem.
    </span>
    <span class="text-weight-light">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa placeat
      quaerat vel? Tempora, aut eius laudantium esse similique praesentium,
      assumenda voluptas molestias optio molestiae laboriosam vero cum maxime
      unde autem.
    </span>
    <span class="text-weight-regular">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa placeat
      quaerat vel? Tempora, aut eius laudantium esse similique praesentium,
      assumenda voluptas molestias optio molestiae laboriosam vero cum maxime
      unde autem.
    </span>
    <span class="text-weight-medium">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa placeat
      quaerat vel? Tempora, aut eius laudantium esse similique praesentium,
      assumenda voluptas molestias optio molestiae laboriosam vero cum maxime
      unde autem.
    </span>
    <span class="text-weight-bold">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa placeat
      quaerat vel? Tempora, aut eius laudantium esse similique praesentium,
      assumenda voluptas molestias optio molestiae laboriosam vero cum maxime
      unde autem.
    </span>
    <span class="text-weight-bolder">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa placeat
      quaerat vel? Tempora, aut eius laudantium esse similique praesentium,
      assumenda voluptas molestias optio molestiae laboriosam vero cum maxime
      unde autem.
    </span>
    <q-btn
      color="primary"
      :label="sideMenuOpen ? 'Close Menu' : 'Open Menu'"
      class="q-mt-md q-px-md"
      @click="toggleSideMenu"
    />
  </q-page>
</template>

<script setup>
import { useUi } from "src/composables/useUi";
defineOptions({
  name: "TypographyPage",
});
const { sideMenuOpen, toggleSideMenu } = useUi();
</script>
