import React, { Component } from 'react';

class KeywordInput extends Component {
  constructor(props) {
    super(props);
  }

  fetchInput = (event) => {
    // console.log(event.currentTarget.value);
    this.props.fetch(event.currentTarget.value);
  }

  render() {
    return (
      <input type="text" name="keyword-input" onChange={this.fetchInput} />
    );
  }
}

export default KeywordInput;
