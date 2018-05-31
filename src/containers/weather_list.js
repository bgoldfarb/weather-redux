import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from '../components/chart'
import GoogleMap from '../components/google_map'
import map from 'lodash'

class WeatherList extends Component {

    renderWeather(cityData){
        const name = cityData.city.name
        const temps = (cityData.list.map((weather) => weather.main.temp))
        let farTemps = temps.map((i) => i * 9/5 - 459.67)
        const pressures = cityData.list.map((weather) => weather.main.pressure)
        const humiditys = cityData.list.map((weather) => weather.main.humidity)
        //destructuring es6 
        const {lon, lat} = cityData.city.coord

        return(
            <tr key = {name}>
                <td><GoogleMap lon={lon} lat={lat}/></td>
                <td><Chart data={farTemps} color="orange" units = "F" /> </td>
                <td><Chart data={pressures} color="blue" units = "hPa" /> </td>
                <td><Chart data={humiditys} color="black"  units = "%"/> </td>

            </tr>
        )
    }


    render(){
        return(
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (F)</th>
                        <th>Pressure (hPa) </th>
                        <th>Humidity (%) </th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}


// is a utility which helps your component get updated state(which is updated by some other components),

function mapStateToProps(state) {
    return {weather:state.weather}
}

export default connect(mapStateToProps)(WeatherList)