import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/index'

 class SearchBar extends Component {

    constructor(props){
        super(props)
        this.state = {
            term : ''
        }
        this.onInputChange = this.onInputChange.bind(this)
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }

    onInputChange(event){
        this.setState({
            term: event.target.value
        })
    }

    onFormSubmit(event){
        event.preventDefault()

        //calling action creator here
        this.props.fetchWeather(this.state.term)
        //clearing search input
        this.setState({term: ''})
    }

    render(){
        return(
            <form onSubmit={this.onFormSubmit} className = "input-group">
                <input 
                    placeholder="Get a five day forecast"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                 />
            <span className = "input-group-btn">
                <button type="submit" className="btn btn-secondary">Submit </button>
            </span>
            </form>
        )
    }
}

//is a utility which will help your component to fire an action event (dispatching action which may cause change of application state)

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchWeather }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)