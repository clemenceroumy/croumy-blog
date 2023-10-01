import { initializeApp } from 'firebase/app'
import {getStorage} from "firebase/storage";

export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig()
    const firebaseConfig = JSON.parse(config.public.firebase.config)
    const app = initializeApp(firebaseConfig)
    const storage = getStorage(app)

    return {
        provide: {
            firebaseApp: app,
            firebaseStorage: storage
        }
    }
})