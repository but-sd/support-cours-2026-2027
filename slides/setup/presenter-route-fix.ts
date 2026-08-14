import type { Router } from 'vue-router'

export function registerPresenterRouteFix(router: Router) {
  router.beforeEach((to) => {
    const normalizedPath = to.path.replace('/presenter/presenter/', '/presenter/')

    if (normalizedPath !== to.path) {
      return {
        path: normalizedPath,
        query: to.query,
        hash: to.hash,
        replace: true,
      }
    }

    return true
  })
}
