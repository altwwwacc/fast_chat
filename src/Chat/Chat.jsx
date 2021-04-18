import React, { Component } from 'react';
import './Chat.scss'
import ChatDialogue from "./../ChatDialogue/ChatDialogue";
import ChatList from "./../ChatList/ChatList";


class Chat extends Component {

    state = {
        data: [
            {
                user: {
                    name: 'John',
                    id: 1,
                },
                messages: [
                    {
                        message: 'Hello',
                        timestamp: 1617483600000,
                        userId: 1,
                    }
                ],
                lastUpdated: 1617483600000,
            },
            {
                user: {
                    name: 'Market',
                    id: 2,
                },
                messages: [
                    {
                        message: 'Ads text',
                        timestamp: 1618434000000,
                        userId: 2,
                    }
                ],
                lastUpdated: 1618434000000,
            },
            {
                user: {
                    name: 'Alice',
                    id: 3,
                },
                messages: [],
                lastUpdated: 1617583600000,
            }
        ],
        activeUserIdConversation: 1,
        user: {
            id: 7,
            name: 'Current user',
        }
    };

    setActiveChat = (userId) => () => {
        this.setState({
            activeUserIdConversation: userId,
        })
    };

    getActiveChatData = () => {
        const { activeUserIdConversation, data } = this.state;

        const chatData = data.find(item => item.user.id === activeUserIdConversation);

        return chatData ? chatData.messages : [];
    };

    addNewMessage = ({text, receiverId}) => {
        const { user, data } = this.state;
        const updatedData = data.reduce((result, userData) => {
            // console.log(userData.user.id === receiverId, userData.user.id, receiverId, userData.user);
            if(userData.user.id === receiverId ) {
                const timestamp = new Date().getTime();
                return [
                    ...result,
                    {
                        ...userData,
                        messages: [
                            ...userData.messages,
                            {
                                message: text,
                                timestamp,
                                userId: user.id,
                            },
                        ],
                        lastUpdated: timestamp,
                    }
                ]
            }
            return [
                ...result,
                userData,
            ];
        }, []);
        console.log(updatedData);
        this.setState({
            data: updatedData,
        })
    };

    render() {

        const { data, activeUserIdConversation } = this.state;

        return (
            <div className="Chat">
                <ChatList
                    data={data}
                    openChat={this.setActiveChat}
                    activeUserIdConversation={activeUserIdConversation}
                />
                <ChatDialogue
                    messages={this.getActiveChatData()}
                    activeUserIdConversation={activeUserIdConversation}
                    addNewMessage={this.addNewMessage}
                />

            </div>
        )
    }

}

export default Chat;