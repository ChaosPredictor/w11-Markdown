require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Footer from './Footer';
import Main from './Main';
import Title from './Title';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
				<Title />
				<Main />
				<Footer />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
