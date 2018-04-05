//api.test.js
import {
    getSearchResult
} from './service.js'

describe('testing api', () => {
    beforeEach(() => {
        fetch.resetMocks()
    })

    it('calls github and returns data ', () => {
        fetch.mockResponseOnce(JSON.stringify({}))
        //assert on the response
        getSearchResult().then(res => {
            expect(res).toEqual({})
        })
    })
})