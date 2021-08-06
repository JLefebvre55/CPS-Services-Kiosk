import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// Components
import NavBar from './components/NavBar'

// Pages
import Home from './pages/Home';

// Theme
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
const theme = createTheme({
  palette: {
    primary: {
      main: blue[800],
    },
  },
});


class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <NavBar />
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </Router>
      </ThemeProvider>
    )
  }
}

export default App;
