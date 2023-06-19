import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "@/pages/MainPage.vue"
import Tasks from "@/pages/TasksPage.vue"

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        component: MainPage
    },
    {
        path: "/tasks",
        component: Tasks
    }
]

export default new VueRouter({
    mode: 'history',
    routes
})