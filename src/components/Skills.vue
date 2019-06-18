<template>
  <section class="skills">
      <div v-for="skill in $page.pages.skills.skill" :key="skill" class="skills-box" :class="[skill.direction, skill.bgcolor]">
        <div class="skills-box__content" >
            <g-image :src="skill.icon"></g-image>
            <h2 class="heading" v-html="skill.heading" />
            <p class="text" v-html="skill.text" />
            <g-link class="btn btn--dark" to="/">Mere om API udviklingd</g-link>
        </div>
        <g-image :src="skill.image" width="1024" quality="80"></g-image>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    skil: {
      type: Object,
      required: true
    }
  }
}
</script>


<style lang="scss" scoped>

.left{
  flex-direction: row-reverse;
}

.light{
  background-color: $light-gray-light;
}

.skills-box{
  display: flex;
  @media (max-width: $screen-sm) {
    display: block;
  }


  &__content{
    width: 50%;
    padding: 8rem;
    @media (max-width: $screen-sm) {
      width: 100%;
    }

    .heading{
      margin-top: 0;
      font-size: 3.5rem;
    }

    .text{
      margin-bottom: 4rem;
    }
  }

  img{
    width: 50%;
    object-fit: cover;
    @media (max-width: $screen-sm) {
      width: 100%;
    }
  }

}

</style>