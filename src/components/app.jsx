import React, { Component } from 'react';
import giphy from 'giphy-api';

import KeywordInput from './keyword_input.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

const GIPHY_API_KEY = '1KMPHCBIOe3hOjJwCJQX49sRc6cM0oIm';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifIds: [],
      selectedGif: "rHR8qP1mC5V3G"
    };
    this.fetchGifs("star wars");
  }

  fetchGifs = (query) => {
    giphy({ apiKey: GIPHY_API_KEY, https: true })
      .search({
        q: query,
        rating: 'g',
        limit: 10
      }, (err, result) => {
        this.setState({
          gifIds: result.data
        });
      });
  };

  changeSelectedGif = (id) => {
    this.setState({
      selectedGif: id
    });
  }


  render() {
    return (
      <div>
        <div className="left-scene">
          <div className="form-search">
            <KeywordInput fetch={this.fetchGifs} />
          </div>
          <div className="selected-gif">
            <Gif id={this.state.selectedGif} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifIds} changeGif={this.changeSelectedGif}/>
        </div>
      </div>
    );
  }
}

export default App;
