import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/Header'; 
import Steps from './components/Steps';
import AddStep from './components/AddStep';
import About from './components/pages/About';
import {v4 as uuid} from 'uuid';

import './App.css';

class App extends Component{
  state = {
    steps:[
      {
        id: uuid(),
        title: 'stap 1',
        completed: false
      },
      {
        id: uuid(),
        title: 'stap 2',
        completed: false
      },
      {
        id: uuid(),
        title: 'stap 3',
        completed: false
      }

    ] 
  }

  //toggle complete
  markComplete = (id) =>{
    this.setState({ steps: this.state.steps.map(step =>{
      if(step.id === id){
        step.completed = !step.completed;
      }
      return step;
    }) });
    }

    // Add step
    AddStep = (title) =>{
      const newStep = {
        id: uuid(),
        title,
        completed: false
      }
      this.setState({steps: [...this.state.steps, newStep]})
    }

   render() {
     console.log(this.state.steps)
    return (
      <Router>
        <div className="App">
          <Header/>
          <div className="container">
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddStep addStep={this.AddStep}/>
                <Steps steps={this.state.steps} markComplete={this.markComplete}/>
              </React.Fragment>
            )} />
            <Route path="/about" component={About}/>
          </div>
        </div>
      </Router>
    );
  }
}



export default App;
