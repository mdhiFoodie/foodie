import React, { Component } from 'react';

class Messages extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div>
        {this.props.singleMessage && this.props.singleMessage.length ? (
          <div className="entireMessage">
            <div className="chatUser">{this.props.singleMessage[1]}:</div>{' '}
            <div className="chatMessage">{this.props.singleMessage[0]}</div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Messages;
