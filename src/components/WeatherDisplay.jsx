import React, { Component } from 'react';
import { connect } from 'react-redux';
import WeatherIcon from 'react-icons-weather';

class WeatherDisplay extends Component {
    constructor() {
        super();

        this.state = {
            id: 0
        }
    }

    render() {
        const formatter = new Intl.DateTimeFormat("ru", { month: "long", day: "numeric" });
        const {weather: {list, cod}, description} = this.props;
        const { id } = this.state;
        let date = null;
        
        if(cod === "200")
        date = formatter.format(new Date(list[id].dt_txt.split(" ")[0]));

        return cod === "200" ?
            (<div className="weather-card">
                <div className="weather-card__content">
                    <div className="weather-card__header">
                        <WeatherIcon 
                        name="owm" 
                        iconId={`${list[id].weather[0].id}`} 
                        flip="horizontal" 
                        rotate="90" 
                        style={{ fontSize: '70px', color: "black" }} 
                        />
                        <div>
                            <span className="weather-card__temperature">{list[id].main.temp.toFixed()}&deg;C</span>
                            <span className="weather-card__description">{date}
                            </span>
                            <span className="weather-card__location">{description}</span>
                        </div>
                    </div>
                    <nav className="weather-card__navigation" role='navigation'>
                        <ul className="weather-card__button" onClick={(e) => this.showWeather(e)}>
                            <li><button className="btn" id={0}>Сегодня</button></li>
                            <li><button className="btn" id={9}>Завтра</button></li>
                            <li><button className="btn" id={17}>Послезавтра</button></li>
                        </ul>
                    </nav>

                    <table className="weather-card__forcast">
                    <tbody>
                        <tr>
                            <td>Макс. температура</td>
                            <td>{list[id].main.temp_max.toFixed()}&deg;C</td>
                        </tr>

                        <tr>
                            <td>Мин. температура</td>
                            <td>{list[id].main.temp_min.toFixed()}&deg;C</td>
                        </tr>
                        <tr>
                            <td>Скорость ветра</td>
                            <td>{list[id].wind.speed} км/ч</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            ) : null;
    }

    showWeather = event => {
        if(event.target.id)
        this.setState({
            id: event.target.id
        });
    }
}

const mapStateToProps = store => {
    return {
        weather: store.weatherForecast,
        description: store.description
    }
  }
  
  export default connect(
    mapStateToProps
  )(WeatherDisplay);