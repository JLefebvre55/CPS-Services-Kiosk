import * as React from 'react';
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
        <img src="assets/logo512.png" className="App-logo" alt="logo" />
        <p>
          {this.props.message}
        </p>
      </header>
    </div>)
  }
}

export default App;
