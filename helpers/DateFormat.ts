import dayjs from "dayjs";
import * as fr from 'dayjs/locale/fr'
import duration, {DurationUnitType} from 'dayjs/plugin/duration'
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

  static toDate(date: string | Date): Date {
    return dayjs(date).toDate();
  }

  static durationToTime(value: number, displaySeconds: boolean = false, unit: DurationUnitType = 'seconds'): string {
    let duration = dayjs.duration(value, unit)
    const hours = Math.trunc(duration.asHours())
    duration = duration.subtract(hours, 'hours')
    const minutes = displaySeconds ? Math.trunc(duration.asMinutes()) : Math.round(duration.asMinutes())
    duration = duration.subtract(minutes, 'minutes')
    const seconds = Math.round(duration.asSeconds())

    return `${hours > 0 ? `${hours}h` : ''}${minutes > 0 ? `${minutes}m` : ''}${displaySeconds ? seconds > 0 ? `${seconds}s` : '' : ''}`
  }
}