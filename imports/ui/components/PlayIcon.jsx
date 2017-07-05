// Framework
import React, { Component } from 'react';

class PlayIcon extends Component {

  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ clicked: true });
  }

  render() {
    const { type, url } = this.props;

    return (
      <div className="play-icon">
        {
          this.state.clicked ?
            <audio controls>
              <source src={url} type={type} />
            </audio> :
            <button className="bg-primary" onClick={this.handleClick}>
              <i className="fa fa-play" />
            </button>
        }
      </div>
    );
  }
}

export default PlayIcon;
