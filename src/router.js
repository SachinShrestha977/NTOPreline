import { createRouter, createWebHistory } from "vue-router";
import FAQ from "./components/FAQ.vue";
import Article from "./components/Article.vue";
import Team from "./components/Team.vue";
import Signin from "./components/Authentication/Signin.vue";
import Signup from "./components/Authentication/Signup.vue";
import Blogs from "./components/Blogs/Blogs.vue";
import Specific from "./components/Blogs/Specific.vue";


const routes = [
  {
    path: "/FAQ",
    name: "FAQ",
    component: FAQ
    
  },
  {
    path: "/article",
    name: "Article",
    component: Article
    
  },
  {
    path: "/team",
    name: "Team",
    component: Team
    
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin
    
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup
    
  },
  {
    path: "/blogs",
    name: "Blogs",
    component: Blogs
    
  },
  {
    path: "/blogs/specific",
    name: "Specific",
    components: {
      default: Specific,
      
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
