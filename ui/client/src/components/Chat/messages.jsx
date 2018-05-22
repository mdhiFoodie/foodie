import React, { Component } from 'react';

class Messages extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }
  render() {
    return(
      <div>
        {/* {this.props.previousMessage && this.props.previousMessage.map ( (message) => {
          return message
        })} */}
        {this.props.username}: {this.props.singleMessage}
      </div>
    )
  }
};

export default Messages;