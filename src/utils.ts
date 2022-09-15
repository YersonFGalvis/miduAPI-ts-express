import { NewDiaryEntry } from './types';
import { Weather , Visibility } from './enums';

const isString = (string:string):boolean => {
    return typeof string === "string"
}

const isDate = (date:string):boolean => {
return Boolean(Date.parse(date))
}

const isWeather = (param: any):boolean => {
    return Object.values(Weather).includes(param)
}

const isVisibility = (param: any):boolean => {
    return Object.values(Visibility).includes(param)
}
const ParseComment = (commentFromRequest: any): string => {

    if (!isString(commentFromRequest)) {
        throw new Error(`Incorrect or missing comment`)
    }   

    return commentFromRequest
}

const ParseDate = (dateFromRequest: any): string => {

    if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
        throw new Error(`Incorrect or missing Date`)
    }   

    return dateFromRequest
}

const ParseWeather = (weatherFromRequest: any): Weather => {

    if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
        throw new Error(`Incorrect or missing Weather`)
    }   

    return weatherFromRequest

}
const ParseVisibility = (visibilityFromRequest: any): Visibility => {

    if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
        throw new Error(`Incorrect or missing Visibility`)
    }   

    return visibilityFromRequest
}

const toNewDiaryEntry = (object: any): NewDiaryEntry => {

    const newEntry: NewDiaryEntry = {

        comment:ParseComment(object.comment),
        date:ParseDate(object.date),
        weather: ParseWeather(object.weather),
        visibility: ParseVisibility(object.visibility)

    }
    return newEntry;
}

export default toNewDiaryEntry