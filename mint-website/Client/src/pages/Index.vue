<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-full.svg"
    >
    <q-btn color="primary" label="Go Home" @click="goHome" />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  methods: {
    goHome() {
      this.$router.push({path: '/Home'});
    }
  }
})
</script>
