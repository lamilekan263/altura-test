import moment from "moment";

export function formatDate(date: string| undefined) {
    
    return moment(date).format("dddd DD, MMMM");
}