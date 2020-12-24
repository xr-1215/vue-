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
//service 是一个能发任意ajax请求的函数,当然可以作为对象使用
const service = axios.create({
    baseURL:'/api',//基础路径
    timeout:200000//链接请求超时时间
})

//添加请求拦截器  在发送请求前回调
service.interceptors.request.use((config) => {
    //显示请求进度条
    NProgress.start()
   
    //必须返回config ==> 用于内部ajax请求
    return config//后面会根据返回的config,使用xhr对象发ajax请求
})

//添加响应拦截器
service.interceptors.response.use(
    response => {//请求成功返回的回调
      //隐藏请求进度条:在响应拦截器成功的回调中
        NProgress.done()
        //成功返回的数据不再是response,而是直接响应体数据response.data
        return response.data
    },
    error => {
        //隐藏请求进度条:在响应拦截器失败的回调中
        NProgress.done()
  
        //统一处理错误
        alert(error.message)

        // throw error
        return Promise.reject(error)
    }
)

export default service
