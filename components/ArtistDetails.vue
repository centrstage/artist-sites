<template>
  <Card data-component="artist-details" class="p-4">
    <Heading>{{ artist.name }}</Heading>
    <Paragraph>{{ artist.description }}</Paragraph>
    <Paragraph v-if="artist.website">Website: <a :href="artist.website" target="_blank">{{ artist.website }}</a></Paragraph>

    <hr v-if="hasAnySocialMedia">
    <Paragraph v-if="hasAnySocialMedia" class="subtitle mb-2">Find them on social media:</Paragraph>
    <Social-Media-Icon :data="artist.facebook" class="mr-2"/>
    <Social-Media-Icon :data="artist.twitter" class="mr-2"/>
    <Social-Media-Icon :data="artist.snapchat" class="mr-2"/>
    <Social-Media-Icon :data="artist.instagram" class="mr-2"/>
  </Card>
</template>

<script>
import Card from '~/components/Card'
import Heading from '~/components/Heading'
import Paragraph from '~/components/Paragraph'
import SocialMediaIcon from '~/components/SocialMediaIcon'

export default {
  components: {
    Card,
    Heading,
    Paragraph,
    SocialMediaIcon
  },
  props: {
    artist: {
      type: Object,
      required: true
    }
  },
  computed: {
    hasAnySocialMedia: function() {
      return (
        this.artist.facebook ||
        this.artist.twitter ||
        this.artist.snapchat ||
        this.artist.instagram
      )
    }
  }
}
</script>
