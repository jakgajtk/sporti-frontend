import './promise-polyfill'
import { app } from './app'
import dotenv from 'dotenv'

// Dotenv config should be before using env variables
dotenv.config()

// Enable progressive web app support (with offline-plugin)
if (process.env.NODE_ENV === 'production') {
  require('./pwa')
}

app.$mount('#app')
