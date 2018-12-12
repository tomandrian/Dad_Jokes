import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state={
      question:'',
      answer:'',
      emoji: ''
    }
  }
  clickGet=()=>{
    this.setState({
      emoji:''
    })
    var url = 'https://safe-falls-22549.herokuapp.com/random_joke'
    axios.get(url)
    .then ((x)=>{
      this.setState({
        question:x.data.setup,
        answer: x.data.punchline,
        emoji:<i class="fas fa-grin-squint-tears"></i>
      })
    })
  }
  render() {
    
    return (
      <div style={{background: 'blue'}}>
        <center>
        <div className="container text-right py-5">
          <div className="card w-50 mx-auto">
            <div className="card-body">
            <h3 className="card-title">{this.state.question}</h3>
            <h2 className="card-text font-weight-bold">{this.state.answer}</h2>
            <h2>{this.state.emoji}</h2>
            <br/>
            <button className="btn btn-danger" onClick={()=>{this.clickGet()}}>Reload <i class="fas fa-sync-alt"></i></button>
            </div>
          </div>
        </div>
        </center>
      </div>
    );
  }
}

export default App;