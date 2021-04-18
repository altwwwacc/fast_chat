import React, { useState } from 'react';
import './ChatDialogue.scss'
import ChatDialogueContentItem from "./../ChatDialogueContentItem/ChatDialogueContentItem";


const ChatDialogue = ({messages, activeUserIdConversation, addNewMessage}) => {

    const [message, setMessage] = useState('');

    const onChangeInput = (e) => {
        setMessage(e.target.value);
    };

    const onSend = () => {
        addNewMessage({text: message, receiverId: activeUserIdConversation});
        setMessage('')
    };

    const onKeyPress = (e) => {
        if(e.which === 13) {
            onSend()
        }

    };

    return (
        <div className="ChatDialogue">
            <div className="ChatDialogue__content">
                {messages.map(messageData => (
                    <ChatDialogueContentItem isCurrentUser={activeUserIdConversation !== messageData.userId} key={messageData.timestamp}>
                        {messageData.message}
                    </ChatDialogueContentItem>
                ))}
            </div>
            <div className="ChatDialogue__footer">
                <input type="text" value={message} onChange={onChangeInput} onKeyPress={onKeyPress}/>
                <button onClick={onSend}>
                    Send
                </button>
            </div>
        </div>
    );
};

export default ChatDialogue;