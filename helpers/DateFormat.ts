import dayjs from "dayjs";
import * as fr from 'dayjs/locale/fr'
import duration from 'dayjs/plugin/duration'
import "./StringFormat";
import StringFormat from "./StringFormat";

dayjs.extend(duration)
dayjs.locale(fr)

export default class DateFormat {
  static FULL_DATE_FORMAT = "dddd DD MMMM YYYY";
  static SHORT_DATE_FORMAT = "DD/MM/YYYY";
  static TIME_FORMAT = "HH 'h' mm";

  static fromDate(date: Date | string | undefined, format: string): string {
    if (!date) { return ""; }
    return StringFormat.capitalizeFirstLetter(dayjs(date).format(format));
  }

  static secondsToTime(value: number): string {
    let duration = dayjs.duration(value, 'seconds')
    const hours = Math.trunc(duration.asHours())
    duration = duration.subtract(hours, 'hours')
    const minutes = Math.round(duration.asMinutes())

    return `${hours > 0 ? `${hours}h` : ''}${minutes > 0 ? `${minutes}m` : ''}`
  }
}