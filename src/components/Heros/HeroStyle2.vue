<template>
    <section class="hero">
            <div class="container container--right">
                <div class="hero__content">
                    <div class="text">
                        <!-- <h1 v-html="hero.acf.heroHeading"/>
                        <p v-html="hero.acf.heroText" /> -->
                        <h1>
                            <span class="heading">18 års erfaring med webudvikling
                                <span class="ani"></span>
                            </span>
                        </h1>
                        <p>Webbureau Indexed hjælper med digitialisering af din virksomhed. Opdater eller byg ny hjemmeside eller webapp som kan automatisere dine processer og fjerne manuelt arbejde og herigennem opnå besparelser. Det er vores kernekompetence.</p>
                        <g-link class="btn btn--dark" to="/">Se hvad vi kan gøre for dig</g-link>
                    </div>
                </div>
                <div class="video-wrapper">
                    <video muted="muted" loop="loop" playsinline="" preload="auto" class="imagebox__video"><source src="https://static.konform.com/2018/10/konform-frontpage01.mp4" type="video/mp4"></video>
                </div>
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

.hero{
    position: relative;
    height: 80rem;
    color: $white;
    width: 100%;
    background-color: $primary;

    &:after{
        content:"";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(to bottom right, $primary, $secondary);
        animation: FadeIn .3s ease-in;
        animation-delay: 1s;
        animation-fill-mode: backwards;
    }


        .container{
            height: 100%;
            position: relative;
            z-index: 1;
        }


        &__content{
            text-align: center;
            position: absolute;
            bottom: 0;
            transform: translateY(10%);

            .video-wrapper{
height: 100%;
                video{
                    
                }

            }

            .text{

                h1{
                    font-size: 6rem;
                    margin-top: 0;
                    margin-bottom: .3em;
                    display: inline-block;
                    line-height: 0;

                    .heading{
                        animation: heroHeadingAni 1.4s forwards;
                        animation-delay: .3s;
                        animation-fill-mode: backwards;
                        padding-left: 0.35em;
                        overflow: hidden;
                        display: inline-block;
                        position: relative;
                        line-height: 1.2em;

                        .ani{
                            width: 100%;
                            height: 100%;
                            position: absolute;
                            top: 0;
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
                    animation-delay: 1s;
                    animation-fill-mode: backwards;
                    margin-bottom: 2em;
                    padding: 0 10rem;
                }

                a{
                    animation: FadeIn .3s ease;
                    animation-delay: 1s;
                    animation-fill-mode: backwards;
                }
            }
        }

        .image{
            width: 100rem;
            max-width: 100%;
            height: auto;
            display: block;
            margin-top: 5rem;
            position: relative;
            margin-left: auto;
            margin-right: auto;;
            animation: FadeInDown .3s ease-out;
            animation-delay: 1.4s;
            animation-fill-mode: backwards;
        }

    &__bottom{
        height: 30rem;
        background-color: $light-gray-light;
    }


}

</style>