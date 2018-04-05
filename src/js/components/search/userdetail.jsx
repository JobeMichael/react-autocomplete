import React from 'react';

const userdetail = (props) => {
    return (
        <div className="autocomplete-suggestion">

            {props.avatar_url !== '' ?
                <div>
                    <img src={props.avatar_url} />
                    <span className='as-login'>{props.login}</span>
                    <span className='as-score'>score : <strong>{props.score.toFixed(0)}</strong></span>
                </div>
                : <span className='as-login'>No data found</span>
            }

        </div>
    )
}
export default userdetail;