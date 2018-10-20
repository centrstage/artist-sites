<template>
  <footer class="bg-black font-brand text-white h-8 flex justify-center items-center">
    &copy; 2018 {{ artist.name }}
  </footer>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters(['artist'])
}
</script>
