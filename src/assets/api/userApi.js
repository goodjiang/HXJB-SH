import { get, post } from './request'
// 登录
export const Login = (data) =>{return post('/supp/api/login', data,'application/x-www-form-urlencoded;')} 

