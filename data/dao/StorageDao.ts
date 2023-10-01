import {FirebaseStorage, getDownloadURL, getMetadata, listAll, ref, StorageReference} from "@firebase/storage";

export default class StorageDao {
    static async getAllFiles(path: string): Promise<{path: string, file: StorageReference, metadata: {[p: string]: string}}[]> {
        const {$firebaseStorage} = useNuxtApp()
        const pathReference = ref($firebaseStorage as FirebaseStorage, path);
        let allFiles = await listAll(pathReference)

        const allFilesWithPath = await Promise.all(allFiles.items.map(async file => {
            return {
                path: await getDownloadURL(file),
                file: file,
                metadata: (await getMetadata(file)).customMetadata ?? {}
            }
        }))

        return allFilesWithPath
    }
}