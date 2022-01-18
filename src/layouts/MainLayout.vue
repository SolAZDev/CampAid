<template lang="pug">
q-layout(view="hHh lpR fFf")
  q-page-container
    router-view

  q-footer(reveal elevated class="bg-grey-8 text-white")
    q-toolbar
      q-toolbar-title
        div Title
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';

@Options({})
export default class MainLayout extends Vue {}
</script>
