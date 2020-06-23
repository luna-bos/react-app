import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
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
        title: 'Doe eieren, suiker, zout en eventueel citroenrasp in een hittebestendige kom.',
        completed: false
      },
      {
        id: uuid(),
        title: 'Plaats de kom op een bain-marie en klop de massa tot deze ongeveer 37 °C is. Als je met je vingers voelt en het niet meer koud aanvoelt, dan is het mengsel goed.',
        completed: false
      },
      {
        id: uuid(),
        title: 'Haal de kom van de bain-marie en klop verder tot het mengsel op kamertemperatuur is.',
        completed: false
      },
      {  
        id: uuid(),
        title: 'Zeef de bloem (en eventueel cacaopoeder) boven het mengsel en spatel dit voorzichtig door de luchtige massa heen tot er geen klontjes meer te zien zijn. Spatel de bloem heel rustig door het beslag, zodat het mooi luchtig blijft.',
        completed: false
      },
      {
        id: uuid(),
        title: 'Het beslag is klaar om verder te verwerken. Laat het niet te lang staan, anders kan het beslag weer inzakken. Bak het biscuit op 180 °C voor zo’n 25 tot 30 minuten.',
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
