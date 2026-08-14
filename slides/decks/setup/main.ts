import { defineAppSetup } from '@slidev/types'
import { registerPresenterRouteFix } from '../../setup/presenter-route-fix'

export default defineAppSetup(({ router }) => {
  registerPresenterRouteFix(router)
})
