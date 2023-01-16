type dayFormat = string
type MonthFormat = string
type YearFormat = string
type OutputDateFormat = [dayFormat, MonthFormat, YearFormat]
type DateFormat = 'dd mm yyyy' | 'yyyy mm dd' | 'yyyy mm dd'

export const parseDateInArray = (date: string, dateFormat: DateFormat = 'yyyy mm dd'): string[] => {
    const dateArray = date.split(' ')
    if (dateFormat === 'yyyy mm dd') {
        return dateArray.slice(0, 3).reverse()
    }
    return dateArray
}

export const sortDate = (dates: string[], order: 'ASC' | 'DESC'): string[] => {
    return dates.sort((previousDate, nextDate) => {
        if (order === 'ASC') {
            return Number(previousDate.split(' ').join('')) - Number(nextDate.split(' ').join(''))
        } else {
            return Number(nextDate.split(' ').join('')) - Number(previousDate.split(' ').join(''))
        }
    })
}
