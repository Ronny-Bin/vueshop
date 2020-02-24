import axios from 'axios'

// export function request(config) {
//   const instance = axios.create({
//     baseURL:'http://123.207.32.32:8000/api/hy',
//     timeout:5000
//   })
//   instance(config.baseConfig).then(
//       res=>{
//         config.success(res)
//       }
//   ).catch(
//       err=>{
//         config.failure(err)
//       }
//   )
// }


export function request(config) {
  const instance = axios.create({
    baseURL:'http://123.207.32.32:8000/api/hy',
    timeout:5000
  })
  return instance(config)
}