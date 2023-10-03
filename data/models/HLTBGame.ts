import DateFormat from "~/helpers/DateFormat";

export default class HLTBGame {
    id: number;
    name: string;
    platform: string;
    picture: string;
    completedDate: Date;
    totalTime: number;

    constructor(copy: HLTBGame) {
        this.id = copy.id;
        this.name = copy.name;
        this.platform = copy.platform;
        this.picture = copy.picture;
        this.completedDate = copy.completedDate;
        this.totalTime = copy.totalTime;
    }

    get completedDateFormatted(): string {
        return DateFormat.fromDate(this.completedDate, DateFormat.SHORT_DATE_FORMAT);
    }

    get totalTimeFormatted(): string {
        return DateFormat.secondsToTime(this.totalTime);
    }
}