<template>
    <section class="hero">
        <div class="hero__top">
            <div class="container container--960">
                <div class="hero__top__content">
                    <div class="text">
                        <h1>
                            <span class="heading" v-if="hero.hero.heading_1">{{hero.hero.heading_1}}
                                <span class="ani"></span>
                            </span>
                            <span class="heading" v-if="hero.hero.heading_2">{{hero.hero.heading_2}}
                                <span class="ani"></span>
                            </span>
                        </h1>
                        <p v-html="hero.hero.text" />
                        <g-link class="btn btn--dark" to="/">Se hvad vi kan gøre for dig</g-link>
                        <g-image class="image" :src="hero.hero.image" quality="60" />

                    </div>
                </div>
            </div>
        </div>
        <div class="hero__bottom">
            <div class="container">
                <div class="icon" v-for="logo in $page.pages.hero.logos" :key="logo">
                    <g-image :src="logo.image"></g-image>
                </div>
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

    &__top{
        position: relative;
        height: 85rem;
        color: $black;
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
            animation-delay: 1.6s;
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
            bottom: -4rem;
            /* text-shadow: 1px 1px 0px rgba(0, 0, 0, .2); */

            .text{
                

                h1{
                    font-size: 6rem;
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
                    animation-delay: 2.1s;
                    animation-fill-mode: backwards;
                    margin-bottom: 2em;
                    padding: 0 15rem;
                    opacity: .8;
                }

                a{
                    animation: FadeIn .3s ease;
                    animation-delay: 2.1s;
                    animation-fill-mode: backwards;
                    color: #FA8027;
                }
            }
        }

        .image{
            width: 100%;
            height: auto;
            display: block;
            margin-top: 5rem;
            position: relative;
            margin-left: auto;
            margin-right: auto;;
            animation: FadeInDown .3s ease-out;
            animation-delay: 2s;
            animation-fill-mode: backwards;
            -webkit-filter: drop-shadow(5px 5px 5px rgba($black, .1));
            filter: drop-shadow(5px 5px 5px rgba($black, .1));
        }
    }

    &__bottom{
        background-color: $light-gray-light;

        .container{
            display: flex;
            align-items: center;
            height: 100%;
            @media (max-width: $screen-sm) {
                flex-direction: column;
            }
            .icon{
                position: relative;
                width: 25%;
                display: flex;
                justify-content: center;
                &:nth-child(2){
                    img{
                        width: 75%;
                    }
                } 
                &:after{
                    content: "";
                    position: absolute;
                    left: 0;
                    top: 55%;
                    width: 1px;
                    height: 4rem;
                    background-color: rgba($black, .05);
                    display: block;
                    transform: translateY(-50%);
                }
                &:first-child:after{
                    display: none;
                }

                img{
                    filter: grayscale(100%) contrast(250%);
                    /* height: 7rem; */
                    width: 100%;
                    max-width: 100%;
                    margin-top: 7rem;
                    margin-bottom: 5rem;
                    padding: 0 4rem;
                    opacity: .9;
                   
                
                    /* @media (max-width: $screen-md) {
                        height: 5rem;
                    }

                    @media (max-width: $screen-sm) {
                        height: 10rem;
                    }*/

                    
                }
            }
            
        }
    }


}

</style>