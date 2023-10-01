import StorageDao from "~/data/dao/StorageDao";
import CollectionPicture from "~/data/models/CollectionPicture";

export default class CollectionService {
    static async getAllFiles(path: string): Promise<CollectionPicture[]> {
        return (await StorageDao.getAllFiles(path)).map(filePath => new CollectionPicture(filePath))
    }
}