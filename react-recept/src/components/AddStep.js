import React, { Component } from 'react'

export class AddStep extends Component {
    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addStep(this.state.title);
        this.setState({title: ""});
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input 
                    type="text" 
                    name="title" 
                    style={{ flex: '10', padding: '5px'}} 
                    placeholder="voeg stap toe.." 
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input 
                    type="submit" 
                    value="voeg toe" 
                    className="btn" 
                    style={{ flex: '1'}}
                />         
            </form>
        )
    }
}

export default AddStep
