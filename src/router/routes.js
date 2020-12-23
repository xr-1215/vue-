import Home from '1_src/pages/Home'
import Search from '1_src/pages/Search'
import Register from '1_src/pages/Register'
import Login from '1_src/pages/Login'

export default[
    {
        path:'/',
        component:Home
    },
    {
        path:'/search/:keyword?',
        component:Search,
        name:'search',
        props(route){
           return {keyword3:route.params.keyword,keyword4:route.query.keyword2}
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
            //需要隐层footer的路由添加如此配置
            isHideFooter:true
        }
    }
]