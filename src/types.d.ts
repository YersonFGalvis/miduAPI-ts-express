export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
export type Visibility = 'great' | 'good' | 'ok' | 'poor'

export interface DiaryEntry{
    id: number,
    date: string,
    weather: Weather,
    visibility: Visibility,
    comment: string

}

//otra forma de hacer lo de abajo
export type NonSensitiveInfoDiaryEntry = Pick<NonSensitiveInfoDiaryEntry, 'id' | 'date' | 'weather' | 'visibility' >


//se extiende de la interfaz DiaryEntry y se omite el campo comment
export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>