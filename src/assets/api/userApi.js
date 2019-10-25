import { get, post } from './request'
// 登录
export const Login = (data) =>{return post('/supp/api/login', data)} 
// 修改密码
export const Updatepwd = (data) =>{return post('/supp/api/updatePassword', data)} 
// 子账号管理
export const selectAccountPage = (data) =>{return get('/supp/accountManage/selectAccountPage', data)} 







