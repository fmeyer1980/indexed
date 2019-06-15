<template>
  <Layout>
    <SiteTitle heading="Side overskrift" text="Underside tekst"/>
      <div class="container">
        <h1>About me</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.</p>
      </div>
  </Layout>
</template>

<script>
import SiteTitle from '~/components/SiteTitle.vue'

export default {
  components: {
    SiteTitle
  },
  metaInfo: {
    title: 'About me'
  }
}
</script>
