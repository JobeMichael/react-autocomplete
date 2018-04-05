import React from 'react';

const userdetail = (props) => {
    return (
        <div className="autocomplete-suggestion" onClick={() => props.selectedUser(props)} >

            {
                props.avatar_url !== '' ?
                    <div>
                        <img src={props.avatar_url} />
                        <span className='as-login'>{props.login}</span>
                    </div>
                    : <span className='as-login'>No data found</span>
            }

        </div >
    )
}
export default userdetail;