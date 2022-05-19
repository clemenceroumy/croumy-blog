import * as dayjs from "dayjs";

export class DateFormat {
  static toFrDate(date: Date): string {
    return dayjs(date).format("dddd dd MMMM yyyy");
  }
}