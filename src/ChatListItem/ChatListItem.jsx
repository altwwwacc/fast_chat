import React from 'react';
import classnames from 'classnames';

import './ChatListItem.scss'


const  ChatListItem = ({userName, message, active, onClick}) => (
    <div className={classnames('ChatListItem', {'ChatListItem--active': active})} onClick={onClick}>
        <div className="ChatListItem__userName">
            {userName}
        </div>
        <div className="ChatListItem__lastMessage">
            {message || 'Please write first message'}
        </div>
    </div>
);


export default ChatListItem;