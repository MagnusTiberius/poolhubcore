import React, { useState } from 'react';

class Articles extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [{name: 'bob'}, {name: 'chris'}],
      };
    }
    
    render() {
      return (
        <div>
            <p>List</p>
            <ul>
            {this.state.data.map(d => <li key={d.name}>{d.name}</li>)}
            </ul>
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <Articles />,
    document.getElementById('articles')
  );