import { defineAppSetup } from '@slidev/types'
import { registerPresenterRouteFix } from './presenter-route-fix'

export default defineAppSetup(({ router }) => {
  registerPresenterRouteFix(router)
})
