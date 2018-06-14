require('dotenv').config()

module.exports = {
  serverMiddleware: [require('cookie-parser')()],
  plugins: [
    // Sets "state.authorization" as axios token
    '~/plugins/auth.js',
    '~/plugins/filters.js',
    '~/plugins/monkey_patches.js',
    '~/plugins/web3.js',
    { src: '~/plugins/pusher.js', ssr: false }
  ],
  modules: [
    '@nuxtjs/font-awesome',
    '@nuxtjs/axios',
  ],
  head: {
    title: 'Shitcoin Hub',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' } 
    ],
    script: [
      {src: 'https://js.pusher.com/4.1/pusher.min.js'},
      {src: 'https://connect.trezor.io/4/connect.js'}
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Sans' }
    ]
  },
  axios: {
    baseURL: 'http://localhost:9292',
    // browserBaseURL: 'https://api.test.exchange'
  },
  env: {

  }
}