import * as React from 'react';
import CurrentWeatherDetail from "./components/CurrentWeatherDetail";
import FormDetail from "./components/FormDetail";

interface IState {
  weather:any[],
  city: any,
  country: any,
  temperature: any,
  temperatureMax: any,
  temperatureMin: any,
  humidity: any,
  description: any,
  icon: any,
  isLoading: any,
  isMounted: any,
  error:any
}

export default class App extends React.Component<{}, IState> {
  constructor(props:any) {
    super(props)
    this.state = {
      weather:[],
      city:undefined,
      country:undefined,
      temperature: undefined,
      temperatureMax: undefined,
      temperatureMin: undefined,
      humidity: undefined,
      description: undefined,
      icon: undefined,
      isLoading: false,
      isMounted: false,
      error: null
    };
  }

  public componentDidMount() {
    const API_KEY = "66052af52fc665034f2dd22b810a8a11";
    const API = 'https://api.openweathermap.org/data/2.5/forecast?q=' + 'Auckland,NewZealand' + '&APPID=' + API_KEY + '&units=metric';
    fetch(API)
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('Error occured...');
      }
    })
    .then(data => this.setState({weather: data.list, isLoading: false, isMounted: true}))
    .catch(error => this.setState({error, isLoading: false}));
  }
  
  public componentWillUnmount() {
    this.setState({ isMounted: false });
  }

  public getWeather = (e: any) => {
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const API_KEY2 = 'c3e036910e4e0b0c1a1dde71f901849c';
    const API = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + ',' + country +'&APPID='+ API_KEY2 + '&units=metric'; 
    fetch(API)
    .then(res => {
      if (res.ok) {
        return res.json();
      }else {
        alert('Please enter the correct country name and city name');
        return location.reload();  
      }
    })
    .then(data => {
      if (city && country) {
      this.setState({
        temperature: data.main.temp,
        temperatureMax: data.main.temp_max,
        temperatureMin: data.main.temp_min,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        error: ""
      });
     }
    })
    .catch(error => this.setState({error, isLoading: false}));
    e.preventDefault();
  }

  public render() {
    const {weather, isLoading} = this.state;
    
    if(isLoading) {
      return<p>Loading Page...</p>;
    }

    return (
      <div>
        <div className="centreText">
          <div className="currentWeatherFinder">
            <div className="headingTitle">
              <h2>Current Weather Finder</h2>
		        </div>
            <div className="headingTitle2">
               <h4>Find weather condition in another country.</h4>
            </div>
            <br />
            <FormDetail getWeather={this.getWeather}/>
            <br/>
            <div className="form-container">
              <CurrentWeatherDetail 
                city={this.state.city}
                country={this.state.country}
                temperature={this.state.temperature} 
                temperatureMin={this.state.temperatureMin}
                temperatureMax={this.state.temperatureMax}
                humidity={this.state.humidity}
                description={this.state.description}
                icon={this.state.icon}
                error={this.state.error}/>
            </div>
          </div>
          <br/>
          <div className="weatherForecast">
            <div className="headingTitle">
              <h2>Weather Forecast in Auckland, NZ</h2>
            </div>
            <div className="headingTitle2">
              <h4>5 day forecast / 3 hours pattern</h4>
            </div>
            <table className="center">
              <tbody>
                <tr><th>Date</th><th>Temperature (°C)</th><th>Conditions</th></tr>
                {weather.map((hit) =>
                  <tr key={hit}>
                    <td>{hit.dt_txt}</td>
                    <td><div className="boldFont">{hit.main.temp}°C </div>
                        <div className="minBoxed">min temp: {hit.main.temp_min}°C </div>
                        <div className="maxBoxed">max temp: {hit.main.temp_max}°C </div>
                    </td>
                    <td><div className="descriptionColor"> {hit.weather[0].description} </div> <br/>
                    <img src={"https://openweathermap.org/img/w/" + hit.weather[0].icon + ".png"}/>
                    <br/>
                    <div className="humidityColor"> Humidity: {hit.main.humidity}</div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}