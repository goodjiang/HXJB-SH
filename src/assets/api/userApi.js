import { get, post } from './request'
// 登录
export const Login = (data) =>{return post('/supp/api/login', data)} 
// 修改密码
export const Updatepwd = (data) =>{return post('/supp/api/updatePassword', data)} 
// 子账号管理/分页
export const selectAccountPage = (data) =>{return get('/supp/accountManage/selectAccountPage', data)} 
//子账号禁用
export const  deleteBoyAccount = (data) =>{return post('/supp/accountManage/deleteBoyAccount',data)}
//子账号详情
export const queryBoyAccountDetail = (data) =>{return get('/supp/accountManage/queryBoyAccountDetail', data)}
//子账号添加&修改
export const  saveBoyAccount = (data) =>{return post('/supp/accountManage/saveBoyAccount',data,true)}



