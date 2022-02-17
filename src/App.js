import React from 'react';
import './App.css';
import Main from './com/Main';
import InternetApp from './components/InternetApp';
import ProMarket from './components/ProMarket';

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <ProMarket/> */}
        {/* <Main /> */}
        <InternetApp />
      </div>
    )
  }
}
export default App;
