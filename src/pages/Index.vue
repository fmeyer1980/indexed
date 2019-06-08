<template>
  <Layout>
   <Hero :hero="$page.wordPressPage" />
   <AboutHome />
  </Layout>
</template>

<page-query>
query Homee {
wordPressPage (id: "20") {
    title
    content
    acf{
      heroHeading
      heroText
    }
featuredMedia {
      sourceUrl
      altText
      mediaDetails {
        width
      }
    }
  }
}

</page-query>

<script>
import Hero from '~/components/Heros/HeroStyle1.vue'
import AboutHome from '~/components/AboutHome.vue'

export default {
  components: {
    Hero,
    AboutHome
  },
  metaInfo: {
    title: 'Welcome to my blog :)'
  }
}
</script>
