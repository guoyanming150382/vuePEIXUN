//全局请求拦截和响应拦截封装
import axios from 'axios'
import { Indicator } from 'mint-ui'

//创建一个实例
var instance = axios.create({
//baseURL: 'http://localhost:8001/', 
	baseURL:process.env.BASE_API,
  timeout: 5000
})

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么  一般是把需要传输的参数序列化一下,设置一下请求头,请求加载框
    Indicator.open('Loading...')
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    Indicator.close();
    return response;
  }, function (error) {
	Indicator.close();
    // 对响应错误做点什么
    return Promise.reject(error);
})

export default instance