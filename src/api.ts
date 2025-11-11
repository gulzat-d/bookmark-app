import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api/',
  timeout: 10000,
})

export const API_ROUTES = {
  profile: `profile`,
  categories: `categories`,
  // bookmarks: {
  //   get: (id: number) => `categories/${id}/bookmarks`,
  //   delete: (id: number) => `bookmarks/${id}`,
  //   create: `bookmarks`,
  // },
  // auth: {
  //   login: `auth/login`,
  //   profile: `auth/profile`,
  // },
}
