import React, { Component } from 'react';
import Messages from './messages.jsx';

import axios from 'axios';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import io from 'socket.io-client';
const socket = io('http://localhost:4000');



class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages : [],
      text : '',
      listofmessages: [],
      username: '',
      messagesFromRedis: []
    }
  }
  
  async componentWillMount() {
    try {
      const userid =  JSON.parse(localStorage.storage).id;
      const getMessages = await axios.get(`http://localhost:3000/api/chat/retrievemessages/${userid}`)
      
      console.log('getting messages on client side', Object.entries(getMessages.data).sort().map( (messages) => {
        return JSON.parse(messages[1]).text
      } ))
      this.setState({
        messagesFromRedis: Object.entries(getMessages.data).sort().map( (messages) => {
          return JSON.parse(messages[1]).text
        } )
      })

    }
    catch (error) {
      console.log(error)
    }
  }

  componentDidMount () {
    console.log('hello this is the component will mount')
    socket.on('connection', () => {
        console.log('connected to serverSETIOSEHTOI#%%#%#%')
    })
    socket.on('messages', (data) => {
        console.log('this be the messag from socket message', data)
        this.state.messagesFromRedis.push(data);
        this.setState({});
    })
}

  onTextChange(e) {
    console.log('this is the state', this.state.text)
    this.setState({
      [e.target.name] : e.target.value
    })
  };

  handleKeyPress = async (e) => {
    // console.log('this is businesses data from reducer', this.props.businessesData)
    if(e.key === 'Enter') {
      console.log('enter button has been clicked')
      //do an axios call to get the text to redis.
        //after let redis
      e.preventDefault();
      this.state.messages.push(this.state.text)
      const storage =  JSON.parse(localStorage.storage);
      const userid = storage.id;
      const username = storage.name;
      const email = storage.email;
      const type = storage.type;
      const createdAt = new Date();
      const payload = {
        messages: this.state.messages,
        text: this.state.text,
        userid: userid,
        email: email,
        type: type,
        createdAt: createdAt,
        username: username
      }
      e.currentTarget.value = '';
      console.log('this is the payload: ', payload)
      // socket.emit('messages', {
      //   message: payload.messages[payload.messages.length-1]
      // })
      try {
        const userMessages = await axios.post('http://localhost:3000/api/chat/messages', payload)
        console.log('this is user messages', JSON.parse(userMessages.config.data))
        const returnedData = JSON.parse(userMessages.config.data);
        console.log('this is parsed data', returnedData.text);
        // this.state.listofmessages.push(returnedData.text);
        // this.state.messagesFromRedis.push(returnedData.text)
        console.log('this state for messages from redis', this.state.messagesFromRedis)
        // console.log('this is the state for list of messages', this.state.listofmessages)
        //send this listofmessages up to redux
        this.setState({
          username: username
        })
      }
      catch (err) {
        console.log(err)
      };
      socket.emit('messages', {
        message: payload.text
      })
    }
  };

  render() {
    console.log('this state username', this.state.username)
    return(
      <div>
        WELCOME TO THE CHAT PAGE
        <div>
        <Messages/>
        </div>

        <div>
          {this.state.messagesFromRedis && this.state.messagesFromRedis.map ( (message, key) => {
            return <Messages key={key} singleMessage={message} username={this.state.username}/>
          })}
        </div>

        <form>
          <input type='text' name='text' onChange={this.onTextChange.bind(this)} onKeyPress={this.handleKeyPress.bind(this)} placeholder='send message..'/>
        </form>
      </div>
    )
  }
};

// export default Chat;

const mapStateToProps = state => ({
  // usersData is the key coming from our root reducers with the value of our reducer file
  businessesData: state.businessesData
  
})

export default connect(mapStateToProps, null)(Chat);