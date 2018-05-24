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
      const poolId = this.props.poolId;
      const userid =  JSON.parse(localStorage.storage).id;
      const getMessages = await axios.get(`http://localhost:3000/api/chat/retrievemessages/${poolId}`)
      console.log('this is the messages that i receive back from getmessages', Object.entries(getMessages.data))
      this.setState({
        messagesFromRedis: Object.entries(getMessages.data).sort().map( (messages) => {
          return [JSON.parse(messages[1]).text, JSON.parse(messages[1]).username]
        } )
      })
    }
    catch (error) {
      console.log(error)
    }
  }

  componentDidMount () {
    const userid =  JSON.parse(localStorage.storage).id;
    const poolid = this.props.poolId;
    console.log('hello this is the component will mount')
    socket.on('connection', () => {
        console.log('connected to serverSETIOSEHTOI#%%#%#%')
    })
    // socket.on('messages', (data) => {
    //     console.log('this be the messag from socket message', data)
    //     this.state.messagesFromRedis.push(data);
    //     this.setState({});
    // })
    // socket.on('join', (poolid) => {
    //   console.log('this is user joining a room', poolid);
    //   this.setState({})
    // })
    socket.on('sendChat', (data) => {
      console.log('this be the messag from socket message', data)
      this.state.messagesFromRedis.push(data);
      this.setState({});
  })
    socket.emit('join', {
      poolid: poolid
    })
}

  onTextChange(e) {
    this.setState({
      [e.target.name] : e.target.value
    })
  };

  handleKeyPress = async (e) => {
    if(e.key === 'Enter') {
      console.log('this is props in chat', this.props)
      e.preventDefault();
      this.state.messages.push(this.state.text)
      const storage =  JSON.parse(localStorage.storage);
      const userid = storage.id;
      const username = storage.name;
      const email = storage.email;
      const type = storage.type;
      const createdAt = new Date();
      const poolId = this.props.poolId;
      const payload = {
        messages: this.state.messages,
        text: this.state.text,
        userid: userid,
        email: email,
        type: type,
        createdAt: createdAt,
        username: username,
        poolid: poolId
      }
      e.currentTarget.value = '';
      try {
        const userMessages = await axios.post('http://localhost:3000/api/chat/messages', payload)
        console.log('this is user messages', JSON.parse(userMessages.config.data))
        const returnedData = JSON.parse(userMessages.config.data);

        this.setState({
          username: username
        })
      }
      catch (err) {
        console.log(err)
      };
      socket.emit('sendChat', {
        message: [payload.text, payload.username],
        poolid: poolId
      })
    }
  };

  render() {
    // console.log('this state username', this.state.messagesFromRedis)
    return(
      <div>
        WELCOME TO THE CHAT PAGE
        <div>
        <Messages/>
        </div>

        <div>
          {this.state.messagesFromRedis && this.state.messagesFromRedis.map ( (message, key) => {
            return <Messages key={key} singleMessage={message}/>
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