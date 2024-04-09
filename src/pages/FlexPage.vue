<template>
  <q-page>
    <div class="row q-mb-md">
      <div class="col bg-info"></div>
      <div class="col bg-secondary"></div>
      <div class="col bg-accent"></div>
    </div>

    <div class="row q-mb-md">
      <div class="col bg-info"></div>
      <div class="col-6 bg-secondary"></div>
      <div class="col bg-accent"></div>
    </div>

    <div class="row q-mb-md justify-center">
      <div class="col-4 bg-info"></div>
      <div class="col-4 bg-secondary"></div>
    </div>

    <div class="row q-mb-md justify-end">
      <div class="col-4 bg-info"></div>
      <div class="col-4 bg-secondary"></div>
    </div>

    <div class="row q-mb-md justify-between">
      <div class="col-4 bg-info"></div>
      <div class="col-4 bg-secondary"></div>
    </div>

    <div class="row q-mb-md">
      <div class="col-4 bg-info"></div>
      <div class="col-4 bg-secondary"></div>
    </div>

    <q-separator spaced />

    <div class="row q-mb-md justify-between">
      <div class="col-12 col-sm-6 col-md-4 bg-info"></div>
      <div class="col-12 col-sm-4 col-md-6 bg-secondary"></div>
    </div>

    <q-separator spaced />

    <div class="flex q-mb-sm">
      <div class="square-box q-mx-md bg-info" />
      <div class="square-box q-mx-md bg-secondary" />
      <div class="square-box q-mx-md bg-accent" />
    </div>

    <div class="flex q-mb-sm justify-center">
      <div class="square-box q-mx-md bg-info" />
      <div class="square-box q-mx-md bg-secondary" />
      <div class="square-box q-mx-md bg-accent" />
    </div>

    <div class="flex q-mb-sm justify-between">
      <div class="square-box q-mx-md bg-info" />
      <div class="square-box q-mx-md bg-secondary" />
      <div class="square-box q-mx-md bg-accent" />
    </div>

    <div class="flex q-mb-sm justify-end">
      <div class="square-box q-mx-md bg-info" />
      <div class="square-box q-mx-md bg-secondary" />
      <div class="square-box q-mx-md bg-accent" />
    </div>
    <div class="flex q-mb-sm justify-around">
      <div class="square-box q-mx-md bg-info" />
      <div class="square-box q-mx-md bg-secondary" />
      <div class="square-box q-mx-md bg-accent" />
    </div>
    <div class="flex q-mb-sm justify-evenly">
      <div class="square-box q-mx-md bg-info" />
      <div class="square-box q-mx-md bg-secondary" />
      <div class="square-box q-mx-md bg-accent" />
    </div>
    <div class="column q-mb-sm bg-dark items-center">
      <div class="square-box q-mx-md bg-info" />
      <div class="square-box q-mx-md bg-secondary" />
      <div class="square-box q-mx-md bg-accent" />
    </div>
    <div class="column q-mb-sm bg-dark items-end">
      <div class="square-box q-mx-md bg-info" />
      <div class="square-box q-mx-md bg-secondary" />
      <div class="square-box q-mx-md bg-accent" />
    </div>

    <div
      class="column custom-height q-mb-sm bg-dark items-center justify-center"
    >
      <div class="square-box q-mx-md bg-info" />
      <div class="square-box q-mx-md bg-secondary" />
      <div class="square-box q-mx-md bg-accent" />
    </div>
    <div
      class="column custom-height q-mb-sm bg-dark items-center justify-between"
    >
      <div class="square-box q-mx-md bg-info" />
      <div class="square-box q-mx-md bg-secondary" />
      <div class="square-box q-mx-md bg-accent self-start" />
    </div>
    <div class="column custom-height q-mb-sm bg-dark justify-between">
      <div class="square-box q-mx-md bg-info self-end" />
      <div class="square-box q-mx-md bg-secondary self-center" />
      <div class="square-box q-mx-md bg-accent" />
    </div>
  </q-page>
</template>

<script setup>
defineOptions({
  name: "FlexPage",
});
</script>

<style scoped>
.col,
.col-4,
.col-6,
.col-12 {
  height: 50px;
}

.square-box {
  height: 50px;
  width: 50px;
}
.custom-height {
  height: 300px;
}
</style>
