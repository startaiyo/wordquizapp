import './App.css';
import React, {Component} from 'react';
import WordQuiz from './components/word_quiz';

class Counter extends Component {
  constructor(props){
    super(props)
    this.state={ count: 0 }
  }
  
  plusOne=()=>{
    this.setState({count: this.state.count + 1})
  }
    
  render(){
    return(
      <React.Fragment>
        <div>こんにちは</div>
        <div>{this.state.count}</div>
        <button onClick={this.plusOne}>+1</button>
      </React.Fragment>
    )
  }
}

function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
