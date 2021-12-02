/* eslint-disable */
import './styles/app.scss'
import { App as Application, Plugin } from 'vue'
import { setVueInstance } from './utils/config/index'

const install: Exclude<Plugin['install'], undefined> = (
  instance: Application
) => {
  setVueInstance(instance)

  instance.directive('click-outside', {
    beforeMount(el, binding) {
      el.clickOutsideEvent = function (event: { target: any }) {
        if (!(el === event.target || el.contains(event.target))) {
          binding.value(event, el)
        }
      }
      document.body.addEventListener('click', el.clickOutsideEvent)
    },
    unmounted(el) {
      document.body.removeEventListener('click', el.clickOutsideEvent)
    }
  })
}

export default install
