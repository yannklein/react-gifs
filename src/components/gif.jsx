import React, { Component } from 'react';

class Gif extends Component {
  constructor(props) {
    super(props);
  }

  changeSelectedGif = (event) => {
    this.props.changeGif(event.currentTarget.dataset.id);
  }

  render() {

    const source = `https://media2.giphy.com/media/${this.props.id}/200.gif`;

    return (
        <img className="gif" src={source} data-id={this.props.id} onClick={this.changeSelectedGif}/>
    );
  }
}

export default Gif;
