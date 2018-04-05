export const SERIVCE_URL = 'https://api.github.com/search/users';

export const getSearchResult = (query = '') => {
    return fetch(`${SERIVCE_URL}?q=${query}`).then(data => data.json());
}