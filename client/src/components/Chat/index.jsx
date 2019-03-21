import React, { Component } from 'react';
import Messages from './messages.jsx';
import './Chat.scss';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import io from 'socket.io-client';
const socket = io('http://localhost:4000');

class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      text: '',
      listofmessages: [],
      username: '',
      messagesFromRedis: [],
      allUsers: [],
    };
  }

  async componentWillMount() {
    const { name } = JSON.parse(localStorage.storage);
    this.state.allUsers.push(name);
    this.setState({});
    try {
      const poolId = this.props.poolId;
      const userid = JSON.parse(localStorage.storage).id;
      const getMessages = await axios.get(
        `http://localhost:3000/api/chat/retrievemessages/${poolId}`
      );
      this.setState({
        messagesFromRedis: Object.entries(getMessages.data)
          .sort()
          .map(messages => {
            return [
              JSON.parse(messages[1]).text,
              JSON.parse(messages[1]).username,
            ];
          }),
      });
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    const userid = JSON.parse(localStorage.storage).id;
    const poolid = this.props.poolId;
    socket.on('connection', () => {
      console.log('connected to serverSETIOSEHTOI#%%#%#%');
    });

    socket.on('sendChat', data => {
      this.state.messagesFromRedis.push(data);
      this.setState({});
    });
    socket.emit('join', {
      poolid: poolid,
    });
  }

  onTextChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleKeyPress = async e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.state.messages.push(this.state.text);
      const storage = JSON.parse(localStorage.storage);
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
        poolid: poolId,
      };
      e.currentTarget.value = '';
      try {
        const userMessages = await axios.post(
          'http://localhost:3000/api/chat/messages',
          payload
        );
        const returnedData = JSON.parse(userMessages.config.data);
        this.setState({
          username: username,
        });
      } catch (err) {
        console.log(err);
      }
      socket.emit('sendChat', {
        message: [payload.text, payload.username],
        poolid: poolId,
      });
    }
  };

  render() {
    // USE REDUX PERSIST TO GET REDUX DATA TO PERSIST.
    return (
      <div className="chatContainer">
        <div className="chatTitle">{localStorage.businessname}'s pool chat</div>

        {/* <div>
        <Messages/>
        </div> */}

        <div className="messages">
          {this.state.messagesFromRedis &&
            this.state.messagesFromRedis.map((message, key) => {
              return <Messages key={key} singleMessage={message} />;
            })}
        </div>

        <div>
          {/* {this.state.allUsers.map ( (user) => {
            return user
          })} */}
        </div>

        <form className="chatTextBox">
          <input
            type="text"
            name="text"
            onChange={this.onTextChange.bind(this)}
            onKeyPress={this.handleKeyPress.bind(this)}
            placeholder="send message.."
          />
        </form>
      </div>
    );
  }
}

// export default Chat;

const mapStateToProps = state => ({
  // usersData is the key coming from our root reducers with the value of our reducer file
  businessesData: state.businessesData,
  searchBusinesses: state.searchBusinesses,
});

export default connect(
  mapStateToProps,
  null
)(Chat);
