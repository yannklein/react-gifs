import React, { Component } from 'react';

class Gif extends Component {
  changeSelectedGif = (event) => {
    this.props.changeGif(event.currentTarget.dataset.id);
  }

  render() {
    const source = `https://media2.giphy.com/media/${this.props.id}/200.gif`;

    return (
      <img alt="giphy" className="gif" src={source} data-id={this.props.id} onClick={this.changeSelectedGif} />
    );
  }
}

export default Gif;
