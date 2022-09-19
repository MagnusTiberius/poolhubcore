import React from 'react';

export default class AboutComponent extends React.Component {
  render() {
    return (
      <div>
        <p>A little bit about me.</p>
        <p>
          <a href="http://scipio.link:4000/">http://scipio.link:4000/</a>
        </p>
        <p>
          <a href="https://github.com/MagnusTiberius/universal-react-example">https://github.com/MagnusTiberius/universal-react-example</a>
        </p>
      </div>
    );
  }
}
