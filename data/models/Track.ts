import DateFormat from "~/helpers/DateFormat";

export default class Track {
    id: string;
    previewUrl: string;
    name: string;
    durationMs: number
    spotifyLink: string
    artistsNames: string[]
    albumPicture: string
    albumName: string
    constructor(data: Partial<Track>) {
        this.id = data.id;
        this.previewUrl = data.previewUrl;
        this.name = data.name;
        this.durationMs = data.durationMs;
        this.spotifyLink = data.spotifyLink;
        this.artistsNames = data.artistsNames;
        this.albumPicture = data.albumPicture;
        this.albumName = data.albumName;
    }

    get artistsNamesString(): string { return this.artistsNames.join(', ') }
    get trackDuration(): string { return DateFormat.durationToTime(this.durationMs, true, 'millisecond') }
}