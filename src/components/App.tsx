import * as React from 'react';
import logo from './logo.svg';
import './App.css';
// import firebase from 'firebase/app';
// import 'firebase/functions';

type AppProps = {
  message: string
}

class App extends React.Component<AppProps> {
  render() {
    return (<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {this.props.message}
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>)
  }
}

export default App;
