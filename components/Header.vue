<template>
  <header class="bg-black text-white">
    <nav class="mx-4 lg:mx-8 flex flex-col sm:flex-row items-center justify-between">
      <div class="pb-2 sm:pb-0">
        <nuxt-link to="/" class="font-brand text-white hover:text-grey-light no-underline">
          {{ artist.name }}
        </nuxt-link>
      </div>
      <div class="flex items-center">
        <p class="font-brand font-semibold text-xs uppercase">Powered by</p>
        <a href="https://centrstage.com">
          <img src="/img/centrstage-logo-light.png" alt="CENTRSTAGE logo" class="w-24 h-auto m-2">
        </a>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters(['artist'])
}
</script>
