import {MangaStatus, MangaStatusColor} from "~/data/models/MangaStatus";

export default class Manga {
    illustration: string;
    title: string;
    authors: string[];
    completedYear: string;
    status: MangaStatus;

    get authorsString() { return this.authors.join(', ') }
    get statusColor() { return MangaStatusColor[this.status] }

    constructor(data: Manga) {
        this.illustration = data.illustration;
        this.title = data.title;
        this.authors = data.authors;
        this.completedYear = data.completedYear ?? "";
        this.status = MangaStatus[data.status];
    }
}