//action creators, нужны для того, чтобы из компонента мы могли изменять состояние в сторе
// подают сигнал что произошло в системе
import {
    DELETE_ARTICLE, 
    INCREMENT,
    CHANGE_DATE_RANGE, 
    CHANGE_SELECTION
} from '../constants';

export const increment = () => ({ type: INCREMENT });

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function changeDateRange(dateRange) {
    return {
        type: CHANGE_DATE_RANGE,
        payload: {
            dateRange
        }
    }
}

export function changeSelection(selected) {
    return {
        type: CHANGE_SELECTION,
        payload: {
            selected
        }
    }
}