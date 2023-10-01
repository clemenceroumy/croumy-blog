import StorageDao from "~/data/dao/StorageDao";
import CollectionPicture from "~/data/models/CollectionPicture";

export default class CollectionService {
    static async getAllFiles(path: string): Promise<CollectionPicture[]> {
        return (await StorageDao.getAllFiles(path))
            .map(data => new CollectionPicture(
                data.path,
                data.file.name,
                data.metadata['shortcode'],
                Number.parseInt(data.metadata['likes'])
            ))
            .sort((a, b) => b.timestamp - a.timestamp)
    }
}