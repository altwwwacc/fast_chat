import React from 'react';
import classnames from 'classnames'
import './ChatDialogueContentItem.scss'


const ChatDialogueContentItem = ({children, isCurrentUser}) => (
    <div className={classnames('ChatDialogueContentItem', {'ChatDialogueContentItem--own': isCurrentUser})}>
        <div className="ChatDialogueContentItem__message">
            {children}
        </div>
    </div>
);

export default ChatDialogueContentItem;