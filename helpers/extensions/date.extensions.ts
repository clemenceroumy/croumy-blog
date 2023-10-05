declare global {
    interface Date {
        isBefore(dateToCompare: Date | string | undefined): boolean
    }
}

Date.prototype.isBefore = function (dateToCompare: Date | string | undefined): boolean {
    if (!this || !dateToCompare) { return false; }
    return dayjs(this).isBefore(dateToCompare);
}

export {}

import dayjs from "dayjs";
