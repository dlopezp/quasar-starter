<template>
  <div id="q-app">
    <transition
      :enter-active-class="`animated ${enterAnimation}`"
      :leave-active-class="`animated ${leaveAnimation}`"
      :mode="animationMode"
    >
      <router-view />
    </transition>
  </div>
</template>

<script>
import { EntryMixin } from 'playmo-quasar-plugin'

export default {
  name: 'App',
  mixins: [ EntryMixin ],
  data () {
    return {
      enterAnimation: 'fadeIn',
      leaveAnimation: 'fadeOut',
      animationMode: 'out-in'
    }
  }
}
</script>
