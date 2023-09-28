export class InstaFeed {
    pictures: Picture[]

    static fromJson(json: {}): InstaFeed {
        let instaFeed = new InstaFeed();
        instaFeed.pictures = json.graphql.user.edge_owner_to_timeline_media.edges.map((edge: any) => {
            let picture = new Picture();
            picture.url = edge.node.display_url;
            return picture;
        })
        return instaFeed;
    }
}

class Picture {
    url: string;
}