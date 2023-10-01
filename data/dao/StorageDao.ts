import {FirebaseStorage, getDownloadURL, listAll, ref, StorageReference} from "@firebase/storage";

export default class StorageDao {
    static async getAllFiles(path: string): Promise<{path: string, file: StorageReference}[]> {
        const {$firebaseStorage} = useNuxtApp()
        const pathReference = ref($firebaseStorage as FirebaseStorage, path);
        let allFiles = await listAll(pathReference)

        const allFilesWithPath = await Promise.all(allFiles.items.map(async file => {
            return {
                path: await getDownloadURL(file),
                file: file
            }
        }))

        return allFilesWithPath
    }
}