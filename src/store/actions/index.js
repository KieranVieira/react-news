import axios from 'axios';

export const FETCH_NEWS_START = 'FETCH_NEWS_START';
export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS';
export const FETCH_NEWS_FAILURE = 'FETCH_NEWS_FAILURE';

export const fetchNews = () => dispatch => {
    dispatch({ type:FETCH_NEWS_START })
        axios.get('http://api.currentsapi.services/v1/latest-news')
            .then(res => dispatch({ type:FETCH_NEWS_SUCCESS, payload:res.data }))
            .catch(err => dispatch({ type:FETCH_NEWS_FAILURE, payload:err }))
}