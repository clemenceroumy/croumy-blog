export enum  MangaStatus {
    COMPLETED,
    UPTODATE,
    STOPPED,
    ONGOING,
    TODO
}

export const MangaStatusColor: Record<MangaStatus, string> = {
    [MangaStatus.COMPLETED]: '#B044DC',
    [MangaStatus.UPTODATE]: '#49D13D',
    [MangaStatus.STOPPED]: '#E42A2A',
    [MangaStatus.ONGOING]: '#FB9D2D',
    [MangaStatus.TODO]: '#DDDDDD',
};