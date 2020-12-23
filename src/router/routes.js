import Home from '../pages/Home'
import Search from '../pages/Search'
import Register from '../pages/Register'
import Login from '../pages/Login'

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