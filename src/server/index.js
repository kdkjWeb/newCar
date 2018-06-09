import Vue from 'vue'
import Axios from 'axios'

let axiosConfig = Axios.create({
    baseURL: 'http://114.116.25.220:8081',   //后台接口的公用地址
    timeout: '10000',   //所有请求10s后过期
    withCredentials: true,    //是否允许跨域
});

export default axiosConfig;