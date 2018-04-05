import React from 'react';
import Userdetail from './userdetail'

const autoComplete = (props) => {
    let elem = [];

    if (props.data.length > 0) {

        props.data.map((item, index) => {
            let key = `key_${index}`;
            elem.push(<Userdetail key={key} {...item} />);
        })
    }
    else if (props.query.length > 0 && props.query.replace(/^\s+|\s+$/g, "").length > 0) {
        var data = {
            avatar_url: ''
        }
        elem.push(<Userdetail key='key_user_1' {...data} />);
    }

    return (
        <div className="autocomplete-suggestions">
            {elem}
        </div>
    );
}

export default autoComplete;