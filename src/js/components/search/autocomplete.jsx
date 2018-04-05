import React from 'react';
import Userdetail from './userdetail'

const autoComplete = (props) => {
    let elem = [];

    props.data.map((item, index) => {
        let key = `key_${index}`;
        elem.push(<Userdetail key={key} {...item} />);
    })

    return (
        <div className="autocomplete-suggestions">
            {elem}
        </div>
    );
}

export default autoComplete;