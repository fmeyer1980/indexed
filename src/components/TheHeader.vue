<template>
  <header class="header">
      <div class="header-wrapper">
        <g-link class="logo" to="/"><img src="../assets/images/indexed-logo.svg" alt="" /></g-link>
        <nav>
          <ul class="main-menu">
            <li>
              <g-link to="/">
                <span class="text" data-hover="forside">Forside</span>
              </g-link>
              </li>
            <li>
              <g-link to="/cases">
                <span class="text" data-hover="Cases">Cases</span>
                
              </g-link>
              </li>
              <li><g-link to="/src/pages/ydelser/fest">fest</g-link></li>
              <li><g-link to="/src/pages/ydelser/ydelser-gfdgfdg">festtttt</g-link></li>
            <li>
              <g-link to="/ydelser">
                <span class="text" data-hover="Ydelser">Ydelser</span>
                <font-awesome class="icon" :icon="['fas', 'angle-down']"/>
                <!-- <ul>
                  <li>
                    <g-link to="/">API udvikling og integration</g-link>
                  </li>
                  
                </ul> -->
              </g-link>
              
              </li>
            <li>
              <g-link to="/om-os">
                <span class="text" data-hover="Om indexed">Om indexed</span>
                <font-awesome class="icon" :icon="['fas', 'angle-down']"/>
              </g-link>
              </li>



          </ul>
        </nav>
      </div>
  </header>
</template>



<script>

export default {

}
</script>


<style lang="scss">

.header{
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 99;
  height: $header-height;
  color: $white;
  border-bottom: solid 1px rgba($black, .05);

  &-wrapper{
    @include container;
    display: flex;
    align-items: center;
    height: 100%;
  }

  .logo{
    height: 4.4rem;
    width: auto;
    display: block;

    img{
      height: 100%;
    }
  }

  nav{
    margin-left: auto;

      .main-menu{
        @include list-style-none;
        display: flex;

        > li{
          padding: 0 2rem;
          position: relative;
          $link-height: 3.4rem;

          > a{
            background-color: transparent;
            color: inherit;
            height: $link-height;
            line-height: $link-height;
            overflow: hidden;
            font-size: 1.6rem;
            padding: 0;
            font-weight: 500;
            position: relative;
            width: auto;
            display: inline-block;
            font-family: $heading-font;
            text-transform: uppercase;
            display: flex;
            align-items: center;
            &:hover{
              .icon{
                color: $black;
              }
              .text{
                margin-top: -6.8rem;
              }

              ul{
                display: block;
              }
            }

            > .text{
              display: block;
              margin-top: 0px;
              position: relative;
              transition: margin-top .15s cubic-bezier(0.25, 0.1, 0.25, 1);
              height: 3.4rem;
              line-height: 3.4rem;

              &:before{
                  content: attr(data-hover);
                  color: $black;
                  position: absolute;
                  left: 0;
                  top: 100%;
                  z-index: 1;
                  display: block;
              }
          }

            .icon{
                line-height: 3.4rem;
                color: inherit;
                margin-left: 1rem;
                transition: color .15s ease-in;
            }
          }

          .active--exact{
            color: $black;
            &:after{
                  content: "";
                  background-color: currentColor;
                  position: absolute;
                  width: 60%;
                  height: 3px;
                  left: 0;
                  bottom: 0;
              }
          }

          ul{
            @include list-style-none;
            position: absolute;
            display: none;
            top: 1rem;
          }
        }
      }
  }




}

</style>