import {FirebaseStorage, getDownloadURL, listAll, ref} from "@firebase/storage";

export default class StorageDao {

    static async getAllFiles(path: string) {
        const {$firebaseStorage} = useNuxtApp()
        const pathReference = ref($firebaseStorage as FirebaseStorage, path);
        let allFiles = await listAll(pathReference)

        const allFilesUrls = await Promise.all(allFiles.items.map(async file => {
            return getDownloadURL(file)
        }))

        return allFilesUrls
    }
}