import './App.css';
import Main from './components/MainComponent';
import { STAFFS } from './shared/staffs';
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

//json-server --watch db.json -p 3001 -d 2000

const store = ConfigureStore();
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS,
      columns: 4,
    };
  }
  onSetColumn = (column) => {
    console.log(column);
    this.setState({ columns: column });
  };
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
