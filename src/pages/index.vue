<template>
  <DefaultLayout>
    <q-page slot="page" class="flex flex-center q-pa-md">
      <img alt="Playmo logo" src="statics/playmo-logo.png">
    </q-page>
  </DefaultLayout>
</template>

<style>
</style>

<script>
import { DefaultLayout } from 'playmo-quasar-plugin'

export default {
  name: 'PageIndex',
  components: {
    DefaultLayout
  },
  mounted () {
    this.$q.loading.show()
  }
}
</script>
