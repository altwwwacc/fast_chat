import React, { Component } from 'react';
import './ChatList.scss'
import ChatListItem from "./../ChatListItem/ChatListItem";


const ChatList = ({data, activeUserIdConversation, openChat}) => {

    const getLastMessage = (item) => {
        const messages = item.messages.sort((a, b) => (a > b ? -1 : 1));
        return messages.length ? messages[0].message : null;
    };

    return (
        <div className="ChatList">
            {data.map(item => (
                <ChatListItem
                    userName={item.user.name}
                    message={getLastMessage(item)}
                    active={activeUserIdConversation === item.user.id}
                    onClick={openChat(item.user.id)}
                />
            ))}
        </div>
    )
};

export default ChatList;