import React, { Fragment, Component } from 'react';



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

        clearTimeout(this.timeout);
        this.setState({ searching: true });
        this.setState({ queryResults: [] });

        let query = event.target.value;
        // Make a new timeout set to go off in 800ms
        this.timeout = setTimeout(() => {
            if (query.length > 2) {

            }
        }, 300);
    };
    render() {
        return (
            <Fragment>
                Hello World
            </Fragment>
        )
    }
}
