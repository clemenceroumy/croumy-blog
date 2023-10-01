export default class CollectionPicture {
    path: string
    name: string
    shortcode: string
    likes: number

    constructor(path: string, name: string, shortcode: string, likes: number) {
        this.path = path
        this.name = name
        this.shortcode = shortcode
        this.likes = likes
    }

    get timestamp(): number {
        return Number.parseInt(this.name.split('-')[1].replace('.jpg', ''))
    }
}