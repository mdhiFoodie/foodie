import React, { Component } from 'react';

class Messages extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }
  render() {
    // console.log('this.props.singlemessage', this.props.singleMessage)
    return(
      <div>
        {/* {this.props.previousMessage && this.props.previousMessage.map ( (message) => {
          return message
        })} */}
        {
          this.props.singleMessage && this.props.singleMessage.length ? <div className='entireMessage'><div className='chatUser'>{this.props.singleMessage[1]}:</div> <div className='chatMessage'>{this.props.singleMessage[0]}</div></div> 
          : 
          null 
        }
        {/* {this.props.singleMessage[1]} {this.props.singleMessage[0]} */}
      </div>
    )
  }
};

export default Messages;