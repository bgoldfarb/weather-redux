import React, { Component } from 'react'

class GoogleMap extends Component {

    componentDidMount(){
        //creates new embedded google map 
        //interacting with third party library in react
        new google.maps.Map(this.refs.map, {
            //glimpse of city, screen width
            zoom: 12,
            // where we want to center the map on
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        })
    }

    render(){
        return(
            <div ref="map" />
        )
    }
}

export default GoogleMap