export const getSearchResult = (query) => {
    return new Promise((resolve, reject) => {
        fetch(`https://api.github.com/search/issues?q=${query}+language:javascript`)
            .then((res) => {
                res.json().then((data) => { // json() - promise method
                    resolve(data)
                })
            }).catch((err) => {
                console.log(err);
            })
    });
}