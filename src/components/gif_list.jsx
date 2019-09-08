import React, { Component } from 'react';

import Gif from './gif.jsx';

class GifList extends Component {
  changeGif = (id) => {
    this.props.changeGif(id);
  }

  render() {
    return (
      <div className="gif-list">
        {this.props.gifs.map(gif => <Gif id={gif.id} key={gif.id} changeGif={this.changeGif} />)}
      </div>
    );
  }
}

export default GifList;
