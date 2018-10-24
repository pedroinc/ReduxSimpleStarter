import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';


class WeatherList extends Component{

    renderWeather(cityData){
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const { lon, lat } = cityData.city.coord;

        console.log(cityData);
        // <GoogleMap />

        return(
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat} /> {name}</td>
                <td><Chart data={temps} color="orange" units="C" /></td>
                <td><Chart data={humidities} color="orange" units="hPa" /></td>
                <td><Chart data={pressures} color="orange" units="%" /></td>                
            </tr>
        );
    }

    render(){
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>city</th>
                        <th>temperature (K)</th>
                        <th>pressure (hPa)</th>
                        <th>humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({weather}){
    return { weather };
    // return { weather: weather };
    // return { weather: state.weather };
}

export default connect(mapStateToProps)(WeatherList);
