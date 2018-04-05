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
            //this.setState({ queryResults: [] });

            let query = event.target.value;
            // Make a new timeout set to go off in 800ms
            this.timeout = setTimeout(() => {
                if (query.replace(/^\s+|\s+$/g, "").length === 0) {
                    this.setState({ queryResults: [] });
                }

                if (query.replace(/^\s+|\s+$/g, "").length > 0) {
                    getSearchResult(query).then(data => {
                        this.setState({ searchQuery: query });
                        if (!data.length > 0) {
                            this.setState({ queryResults: data.items });
                        }
                        this.setState({ searching: false });
                    }).catch(err => {
                        console.log('Erro')
                    })
                }
                else {
                    this.setState({ searching: false, });
                }
            }, 300);
        }
    };

    render() {
        return (
            <Fragment>
                <Searchfield onKeyUp={this.check} searching={this.state.searching} />
                <Autocomplete data={this.state.queryResults} searching={this.state.searching} query={this.state.searchQuery} />
            </Fragment>
        )
    }
}
