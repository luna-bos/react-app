import React, { Component } from 'react';
import StepItem from './StepItem';
import PropTypes from 'prop-types';

class Steps extends Component{
    
   render() {
    return this.props.steps.map((step) => (
        <StepItem key={step.id} step={step} markComplete={this.props.markComplete}></StepItem>
    )) ;
  }
}

//proptypes
Steps.propTypes = {
    steps: PropTypes.array.isRequired
}

export default Steps;
