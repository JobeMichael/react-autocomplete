import React from 'react';

const userList = (props) => {
    return (
        <div className="user-list">
            <img src={props.avatar_url} />
            <span className='as-login'>{props.login}</span>
        </div >
    )
}
export default userList;