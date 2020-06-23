import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class StepItem extends Component {
    getStyle = () =>{
        return{
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.step.completed ? 'line-through' : 'none'
        }
    }



    render() {
        const {id, title } = this.props.step
        return (
            <div style = {this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>  {' '}                 
                    {title }
                </p>
            </div>
        )
    }
}

//proptypes
StepItem.propTypes = {
    step: PropTypes.object.isRequired
}



export default StepItem
