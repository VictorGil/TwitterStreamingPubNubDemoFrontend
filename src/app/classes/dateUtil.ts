export default class DateUtil {

    public static getCurrentTimeString(): string {
        const date: Date = new Date();
        const result: string = date.toLocaleString() + '.' + date.getMilliseconds();
        return result;
    }

    public static getTimeStringFromString(time: string): string {
        const millisString: string = time.substr(0, time.length - 4);
        const millisNumber: number = parseInt(millisString, 10);
        return DateUtil.getTimeStringFromNumber(millisNumber);
    }

    public static getTimeStringFromNumber(time: number): string {
        const date: Date = new Date(time);
        const result: string = date.toLocaleString() + '.' + date.getMilliseconds();
        return result;
    }
}
