import React from 'react';
import Item from '../components/item';
import Square from '../components/square';
import Board from '../components/board';

export default class IndexComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }  





  renderBoard() {
    return (
      <Board
        value={"board"}
        onClick={() => this.handleClick()}
      />
    );
  }

  render() {
    return (
      <div>
        <p>This is the index page</p>
        <p>Articles</p>
        <div id="articles">
        {this.renderBoard()}
        </div>
      </div>
    );
  }
}
