import React, { Component } from 'react';
import Messages from '../messages/index.jsx';

import axios from 'axios';
import io from 'socket.io-client';
const socket = io('http://localhost:4000')

class Chat extends Component {
  constructor() {
    super();

    this.state = {
      messages : [],
      text : ''
    }
  }

  onTextChange(e) {
    console.log('this is the state', this.state.text)
    this.setState({
      [e.target.name] : e.target.value
    })
  };

  handleKeyPress = async (e) => {
    if(e.key === 'Enter') {
      console.log('enter button has been clicked')
      //do an axios call to get the text to redis.
        //after let redis
    }
  };

  render() {
    return(
      <div>
        WELCOME TO THE CHAT PAGE
        <div>
        <Messages/>
        </div>

        <form>
          <input type='text' name='text' onChange={this.onTextChange.bind(this)} onKeyPress={this.handleKeyPress.bind(this)} placeholder='send message..'/>
        </form>
      </div>
    )
  }
};

export default Chat;