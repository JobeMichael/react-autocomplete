import React, { Fragment, Component } from 'react';
import Autocomplete from '../components/search/autocomplete'
import Searchfield from '../components/search/searchfield'
import { getSearchResult } from '../service.js'



export default class search extends Component {
    constructor(props) {
        super(props);
        this.timeout = null;
        this.state = {
            queryResults: [],
            searching: false,
            searchQuery: '',
        }
    };

    check = event => {
        // Clear the timeout if it has already been set.
        // This will prevent the previous task from executing
        // if it has been less than <MILLISECONDS>   

        if (event.keyCode === 8 || event.keyCode === 32 || (event.keyCode <= 90 && event.keyCode >= 48)) {
            clearTimeout(this.timeout);
            console.log(event.keyCode);
            this.setState({ searching: true });
            this.setState({ queryResults: [] });

            let query = event.target.value;
            // Make a new timeout set to go off in 800ms
            this.timeout = setTimeout(() => {
                debugger;

                if (query.replace(/^\s+|\s+$/g, "").length > 2) {
                    getSearchResult(query).then(data => {
                        this.setState({ searchQuery: query });
                        if (!data.length > 0) {
                            this.setState({ queryResults: data.items });
                        }
                        else {
                            const noData = [{ title: 'No data found' }];
                            this.setState({ queryResults: noData });
                        }
                        this.setState({ searching: false, });
                    })
                }
                else {
                    this.setState({ searching: false, });
                }
            }, 500);
        }
    };

    render() {
        return (
            <Fragment>
                <Searchfield onKeyUp={this.check} searching={this.state.searching} />
                {
                    this.state.searching === false ?
                        <Autocomplete data={this.state.queryResults} query={this.state.searchQuery} /> :
                        ''
                }

            </Fragment>
        )
    }
}
