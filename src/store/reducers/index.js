import {
    FETCH_NEWS_START,
    FETCH_NEWS_SUCCESS,
    FETCH_NEWS_FAILURE
} from '../actions';

const initialState = {
    stories: [],
    isFetchingNews: false,
    error: '' 
}

export const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_NEWS_START:
            return{
                ...state,
                isFetchingNews: true,
                error: ''
            }
        case FETCH_NEWS_SUCCESS:
            return{
                ...state,
                stories: action.payload,
                isFetchingNews: false,
                error: ''
            }
        case FETCH_NEWS_FAILURE:
            return{
                ...state,
                isFetchingNews: false,
                error: action.payload,
            }
        default:
            return state
    }
}