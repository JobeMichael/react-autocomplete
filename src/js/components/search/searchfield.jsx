import React, { Fragment } from 'react';

import Spinner from '../UI/spinner'

const Searchfield = (props) => {
    return (
        <Fragment>
            <input type="text" placeholder="Type your Github issues"
                className="biginput"
                id="autocomplete"
                onKeyUp={event => props.onKeyUp(event)} />
            {props.searching
                ? <Spinner />
                : ''}

        </Fragment>
    );
}
export default Searchfield;