import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/intro',
      component: require("../docs/intro.md")
    },
    {
      path: '/icon',
      component: require("../docs/icon.md")
    },
    {
      path: '/color',
      component: require("../docs/color.md")
    },
    {
      path: '/button',
      component: require("../docs/button.md")
    },
    {
      path: '/input',
      component: require("../docs/input.md")
    }
  ]
})
//初始页面
router.push('/intro');
export default router
