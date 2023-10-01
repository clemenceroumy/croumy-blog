export default class CollectionPicture {
    path: string
    name: string

    constructor(path: string, name: string) {
        this.path = path
        this.name = name
    }

    get timestamp(): number {
        return Number.parseInt(this.name.split('-')[1].replace('.jpg', ''))
    }
}