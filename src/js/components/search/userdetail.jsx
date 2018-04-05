import React from 'react';

const userdetail = (props) => {
    return (
        <div className="autocomplete-suggestion">
            <div>
                <img src={props.avatar_url} />
                <span className='as-login'>{props.login}</span>
                <span className='as-score'>score : <strong>{props.score.toFixed(0)}</strong></span>
            </div>
        </div>
    )
}
export default userdetail;