import router from './router'
import store from '@/store/index'
import Cookies from 'js-cookie'
const whiteList = ['/login'] // no redirect whitelist
router.beforeEach(async (to, from, next) => {
  if (whiteList.indexOf(to.path) !== -1) {
    // in the free login whitelist, go directly
    next()
    return
  }
  console.info(store)
  if (!store.state.isLogin && !Cookies.get('isLogin')) {
    next('/login')
  } else {
    next()
  }
})
