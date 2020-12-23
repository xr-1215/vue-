import Home from 'src/router/node_modules/1_src/pages/Home'
import Search from 'src/router/node_modules/1_src/pages/Search'
import Register from 'src/router/node_modules/1_src/pages/Register'
import Login from 'src/router/node_modules/1_src/pages/Login'

export default [
    {
        path:'/',
        component:Home,
    },
    {
        path:'/search/:keyword',
        component:Search,
        name:'search',
        props(route){
            return {keyword:route.params.keyword,
                 keyword2:route.query.keyword2
            }
        }
    },
    {
        path:'/register',
        component:Register,
        meta:{
            isHideFooter:true
        }
    },
    {
        path:'/login',
        component:Login,
        meta:{
            isHideFooter:true
        }
    }
]