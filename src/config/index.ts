export default {
  "gridsome" : {
    "api": String(process.env.VUE_APP_GRIDSOME_API_URL),
    "name": String(process.env.VUE_APP_GRIDSOME_PROJECT_NAME),
    "email": String(process.env.VUE_APP_GRIDSOME_EMAIL),
    "password": String(process.env.VUE_APP_GRIDSOME_PASSWORD),
  }
}