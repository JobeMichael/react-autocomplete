import React from 'react';

const autoComplete = (props) => {
    let elem = [];

    props.data.map((item, index) => {
        let key = `key_${index}`;
        elem.push(<div key={key} className="autocomplete-suggestion" data-index="0">{item.login}</div>);
    })

    return (
        <div className="autocomplete-suggestions">
            {elem}
        </div>
    );
}

export default autoComplete;