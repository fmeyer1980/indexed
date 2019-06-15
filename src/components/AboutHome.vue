<template>
    <section class="about">
        <div class="container container--960 t-align--center">
            <h2 class="mt-0">Webbureau med over 18 års erfaring</h2>
            <p>Med en bred og årelang erfaring indenfor webbranchen er vi et solidt match når du søger efter et webbureau til at håndtere dine programmerings opgaver. Vi er et webbureau med fokus på kvalitet og kundens løsninger. Vores tekniske kunnen matcher vores evne til at levere. Der arbejdes fokuseret indtil kundens behov er i hus.</p>
        </div>
    </section>
</template>

<script>
export default {
  props: {
    hero: {
      type: Object,
      required: true
    }
  }
}
</script>


<style lang="scss" scoped>

.about{
    padding: 10rem 0;
    background-color: $white;
}

</style>