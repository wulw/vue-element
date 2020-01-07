import router from "./index";
import store from "@/store";

router.beforeEach((to, from, next) => {
  to.meta && typeof to.meta.title !== "undefined"
    ? (document.title = to.meta.title + " · Vue App")
    : "";
    
  if(to.name !== 'login') {
    // console.log(store.state.login.user)
    if(store.state.login.user.id === '') {
      next('/login');
    }
  }
  next();
});
