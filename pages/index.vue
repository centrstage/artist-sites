<template>
  <main class="grid bg-grey-lighter lg:p-4 font-sans">
    <section id="artist">
      <Artist-Details
        :artist="artist"
        class="flex-1"
      />
    </section>
    <section id="streams">
      <Card v-for="stream in streams" :key="stream.id">
        <Livestream-Embed :url="stream.embed" autoplay/>
        <main class="p-4">
          <Heading class="font-brand">{{ stream.title }}</Heading>
          <Paragraph>
            Recorded live on {{ stream.time | moment('Do MMMM YYYY') }} at <a :href="stream.venueUrl">{{ stream.venue }}</a>.
          </Paragraph>
          <Paragraph>
            {{ stream.description }}
          </Paragraph>
        </main>
      </Card>
    </section>
  </main>
</template>

<script>
import ArtistDetails from '~/components/ArtistDetails'
import Card from '~/components/Card'
import Heading from '~/components/Heading'
import LivestreamEmbed from '~/components/LivestreamEmbed'
import Paragraph from '~/components/Paragraph'

import { mapGetters } from 'vuex'

export default {
  head() {
    return {
      title: `${this.artist.name} | Powered by CENTRSTAGE`,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: this.artist.description
        }
      ]
    }
  },
  components: {
    ArtistDetails,
    Card,
    Heading,
    LivestreamEmbed,
    Paragraph
  },
  computed: mapGetters(['artist', 'streams'])
}
</script>

<style scoped>
.grid {
  display: grid;
  grid-gap: 1rem;
  grid-template-areas:
    'artist'
    'streams';
}

@media screen and (min-width: 992px) {
  .grid {
    grid-template-areas: 'streams artist';
    grid-template-columns: 5fr minmax(300px, 2fr);
  }
}

#artist {
  grid-area: artist;
}

#streams {
  grid-area: streams;
}
</style>
