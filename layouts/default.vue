<template>
  <main class="antialiased min-h-screen flex flex-col">
    <Header/>
    <nuxt class="flex-1"/>
    <Footer/>
  </main>
</template>

<script>
import Footer from '~/components/Footer'
import Header from '~/components/Header'

import siteById from '~/apollo/queries/siteById'

export default {
  middleware: ['site'],
  components: {
    Footer,
    Header
  }
}
</script>
