

import React, {Component} from 'react';
import Form from './Components/Form';
import Weather from './Components/Weather';
import './index.css';



const API_KEY = "4f7482a326f320ce4e5579ef78684356";
class App extends Component {

  state ={
    tempreature:'',
    city:'',
    country:'',
    humidity:'',
    description:'',
    erro:''

  }

 getweather = async(event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;
    const country = event.target.elements.country.value;
    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${API_KEY}`)
   const data = await api.json();
   if(city&&country){
     this.setState({
       tempreature:Math.round(data.main.temp)-273,
       city:data.name,
       country:data.sys.country,
       humidity:data.main.humidity,
       description:data.weather[0].description,
       error:''
     })
   }else
   this.setState({

     tempreature:'',
     city:'',
     country:'',
     humidity:'',
     description:'',
     error:'please insert a valid data'
   })

  }

  render(){
  return (

    <div className="wrapper">

    <div className="form-container"> <h1> Weather App</h1>

    <Form getweather={this.getweather} />
    <Weather
    tempreature={this.state.tempreature}
    city={this.state.city}
    country={this.state.country}
    humidity={this.state.humidity}
    description={this.state.description}
    error={this.state.error}
     />

     </div>
    </div>
  );
}
}

export default App
