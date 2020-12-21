import React, { Component } from 'react';
import { store } from './App';

class Chat extends Component {
    handleClick = (index) => {
        store.dispatch({
            type: 'DELETE_MESSAGE',
            index: index,
        })
    }

    render() {
        const messages = this.props.messages.map((message, index) => (
            <div key={index} className='message'>
                {message}
                <button className='btn' onClick={() => this.handleClick(index)}><i className="fas fa-trash trash-button"></i></button>
            </div>
        ))

        return (
            <div>
                {messages}
            </div>
        )
    }
}

export default Chat;