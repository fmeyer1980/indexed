<template>
    <div class="site-title">
        <div class="container t-align--center">
            <h1>
                <span class="heading">{{heading}}
                    <span class="ani"></span>
                </span>
            </h1>
            <p class="text" v-html="text" />
        </div>
        <g-image :src="image" width="1024" quality="80"></g-image>
    </div>
</template>

<script>
export default {
  name: 'skills',
  props: {
    heading: String,
    text: String,
  }
}
</script>


<style lang="scss" scoped>

.site-title{
    min-height: 15rem;
    background-color: $primary;
    color: $black;
    padding-top: calc(5rem + 10rem);
    padding-bottom: 5rem;

    .text{
        margin-bottom: 0;
    }

     h1{
        font-size: 5rem;
        margin-top: 0;
        margin-bottom: .3em;
        display: inline-block;
        line-height: 0;
        margin: 0 9rem .3em;
        

        .heading{
            animation: heroHeadingAni 1.4s forwards;
            animation-delay: .3s;
            animation-fill-mode: backwards;
            overflow: hidden;
            display: inline-block;
            position: relative;
            line-height: 1.2em;
            margin-bottom: 0em;
            &:last-child{
                animation-delay: .5s;
                .ani{
                    animation-delay: .5s;
                }
            }

            .ani{
                width: 100%;
                height: 100%;
                position: absolute;
                top: .1em;
                left: 0;
                z-index: 1;
                animation: slideInFromLeft .8s;
                animation-fill-mode: backwards;
                animation-delay: .3s;
            }
        }

        
    }

    p{
        font-size: 2rem;
        margin: 0;
        font-weight: 400;
        animation: FadeIn .3s ease;
        animation-delay: 1.6s;
        animation-fill-mode: backwards;
        margin-bottom: 2em;
        padding: 0 15rem;
        opacity: .8;
    }
}

</style>