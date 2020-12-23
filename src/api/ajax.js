/* 
对axios进行二次包装
1. 配置通用的基础路径和超时
2. 显示请求进度条
3. 成功返回的数据不再是response, 而直接是响应体数据response.data
4. 统一处理请求错误, 具体请求也可以选择处理或不处理
*/

import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

//配置通用的基础路径和超时
const service = axios.create({
    baseURL:'http://39.99.186.36/api',//基础路径
    timeout:200000//链接请求超时时间
})

//添加请求拦截器  在发送请求前回调
service.interceptors.request.use((config) =>{
   
    //必须返回config ==> 用于内部ajax请求
    return config
})

//添加响应拦截器
service.interceptors.response.use(
    response => {//请求成功返回的回调
      
        return response
    },
    error => {
        throw error
    }
)

export default service
