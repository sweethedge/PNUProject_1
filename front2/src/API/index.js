import axios from 'axios'

//axios 인스턴스 생성
// const BASE_URL = "http://localhost:8080/data/"
const BASE_URL = "http://3.35.179.46:8080/data/"
const header = {
  'Access-Control-Allow-Origin': 'http://3.35.179.46:8080',
  'Access-Control-Allow-Methods': 'POST, PUT, PATCH, GET, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization',
  'Access-Control-Allow-Credentials': 'true'
}

const axiosAPI = (url, header, options) => {
  const instance = axios.create({ baseURL: url, headers: header, ...options })

  return instance
}

export const defaultInstance = axiosAPI(BASE_URL, header)
