import App from '../App'

// const home = r => require.ensure([], () => r(require('@/pages/home/home.vue')), 'home')
// const article = r => require.ensure([], () => r(require('@/pages/article/detail.vue')), 'article')

const home = () =>
    import ('@/pages/home/home.vue')
const article = () =>
    import ('@/pages/article/detail.vue')

export default [{
    path: '/',
    component: App,
    children: [{
            path: '',
            redirect: '/home'
        },
        {
            path: '/home',
            component: home
        },
        // {
        //   path: '/article', 
        //   component: article 
        // }, 
        {
            path: '/article/:article_id',
            name: 'article',
            keepAlive: true,
            component: article,
        },
    ]
}]