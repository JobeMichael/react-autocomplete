import React, { Fragment, Component } from 'react';
import Autocomplete from '../components/search/autocomplete'
import Searchfield from '../components/search/searchfield'
import { getSearchResult } from '../service.js'
import UserList from '../components/search/userlist'



export default class search extends Component {
    constructor(props) {
        super(props);
        this.timeout = null;
        this.state = {
            queryResults: [],
            searching: false,
            searchQuery: '',
            selected: false,
            selectedUser: {}
        }
    };
    selectedUser = user => {
        this.setState({ queryResults: [], selected: true, selectedUser: user });
        console.dir(user);
    }

    searchEvent = event => {
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
                            this.setState({ queryResults: data.items, selected: false });
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
                <Searchfield onKeyUp={this.searchEvent} searching={this.state.searching} />
                {this.state.selected === false
                    ? <Autocomplete data={this.state.queryResults} selectedUser={this.selectedUser} searching={this.state.searching} query={this.state.searchQuery} />
                    : <UserList {...this.state.selectedUser} />}
            </Fragment>
        )
    }
}
