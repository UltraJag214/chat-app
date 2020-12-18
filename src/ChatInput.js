import { Component } from "react";
import { store } from "./App.js";

class ChatInput extends Component {
    state = {
        value: '',
    }

    onChange = (e) => {
        this.setState({
            value: e.target.value,
        })
    }

    handleSubmit = () => {
        store.dispatch({
            type: 'ADD_MESSAGE',
            message: this.state.value,
        })
        this.setState({
            value: '',
        })
    }

    render() {
        return (
            <div>
                <input
                    onChange={this.onChange}
                    value={this.state.value}
                    type='text'
                />
                <button
                    onClick={this.handleSubmit}
                    className='submit-button'
                    type='submit'
                >
                    Send
                </button>
            </div>
        )
    }
}

export default ChatInput;