import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: 0,
      desc: '',
      icon: '',
      loading: true}
  }
  
  // get the data from the weather api
  // fetch gets the object, responseData holds the data
  // setState will load the values data to their respective keys (temp, desc)
  componentDidMount() {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=Tampa&units=Metric&APIkey=bc4694f5a46bc52b91b1b2a264e05a5d')
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          temp: responseData.main.temp,
          desc: responseData.weather[0].description,
          icon: responseData.weather[0].icon,
          loading: false
        })
      })
      .catch(err => console.error(err));
  } 
  render() {
    // notice the backtics girlfriend!
    // save the image to a variable
    const imgSrc = `http://openweathermap.org/img/w/${this.state.icon}.png`

    if (this.state.loading) {
      return <p>Loading...</p>
    } 
    else {    
      return (
        <div className="App">
          <h2>Tampa's Current Weather</h2>
            <p>Temperature: {this.state.temp} Celcius</p>
            <p>Description: {this.state.desc}</p>
            <img src={imgSrc} alt="Weather icon"/>
        </div>
      );
    }
  }
}

export default App;
