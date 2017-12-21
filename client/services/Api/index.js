import axios from 'axios'

console.log('envs', process.env)
// const apiInstance = axios.create({
//   baseURL: `${process.env.API_HOST}:${process.env.API_PORT}`,
// })

const test = () => {
  console.log(`${process.env.API_HOST}:${process.env.API_PORT}` + '/test')
  return new Promise((resolve, reject) => {
    axios.get(`${process.env.API_HOST}:${process.env.API_PORT}` + '/test')
      .then((data) => {
        console.log(data)
        resolve()
      })
      .catch((data) => {
        console.log(data)
        reject()
      })
  })
}

export default {
  test
}
