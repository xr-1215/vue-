import axios from 'axios'
// import NProgress from 'nprogress'
import '1_src_44/api/node_modules/nprogress/nprogress.css'
//创建新的ajax对象 设置基础路由 超时时间
const service = axios.create({
    baseURL: '/api',
    timeout: 20000
});

//设置请求拦截器
service.interceptors.request.use(config => {
    return config
})

//设置响应拦截器
service.interceptors.response.use(
    //成功的回调
    response => {
        return response.data
    },
    error => {
        // throw error
        return Promise.reject(error)
    }
)

export default service