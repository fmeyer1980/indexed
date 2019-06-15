import TheHeader from '@/components/TheHeader.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faTwitter, faGithubSquare, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight, faAd, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false;
library.add(faGithub, faTwitter, faGithubSquare, faFacebook, faArrowRight, faAd, faAngleDown)

export default function (Vue, options, context) {
  Vue.component('the-header', TheHeader)
  Vue.component('font-awesome', FontAwesomeIcon)
  
  context.appOptions.render = h => {
    return h('div', {}, [
      h('the-header'),
      h('transition', { attrs: { name: 'page', mode: 'out-in' } }, [
        h('router-view', { attrs: { id: 'app' } })
      ])
    ])
  }
}