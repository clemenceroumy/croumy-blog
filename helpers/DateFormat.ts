import dayjs from "dayjs";
import * as fr from 'dayjs/locale/fr'
import "./StringFormat";
import StringFormat from "./StringFormat";
dayjs.locale(fr)

export default class DateFormat {
  static toFrDate(date: Date): string {
    return StringFormat.capitalizeFirstLetter(dayjs(date).format("dddd DD MMMM YYYY"));
  }
}