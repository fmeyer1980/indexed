<template>
  <Layout>
    <AboutHome />
    <img src="../assets/images/adult-code-coder-340152.jpg?nf_resize=fit&w=100" alt="Screenshots of CSS-Tricks and CodePen homepages"/>
  </Layout>
</template>

<script>
import Hero from '~/components/Heros/HeroStyle1.vue'
import AboutHome from '~/components/AboutHome.vue'
import Skills from '~/components/Skills.vue'

export default {
  components: {
    Hero,
    AboutHome,
    Skills
  },
  metaInfo: {
    title: 'Welcome to my blog :)'
  }
}
</script>
<page-query>
query PageHome {
  pages (path: "/"){
    title
    id
    hero{
      heading_1
      heading_2
      text
      image
    }
    logos{
        image
      }
    skills {
      skill{
        image
        icon
        text
        heading
        direction
        bgcolor
      }
    }
  }
}
</page-query>

<style lang="scss">

  .grid{
    /* display: grid;
    grid-template-columns: repeat( auto-fit, minmax(50%, 1fr) ); */
  }

</style>
