import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import WordQuiz from './components/word_quiz';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <MuiThemeProvider>  
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={WordQuiz}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
