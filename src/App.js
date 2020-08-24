import React, { Component } from 'react';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

class App extends Component{

    state = {
        data: {},
        country: ''
    }

    async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState(
            {data: fetchedData}
        );
    }

    handleCountryChange = async (country) =>{
        // console.log(country);
        const fetchedData = await fetchData(country);
        this.setState(
            {data: fetchedData,
            country: country}
        );
    }

    render(){

        const {data, country} = this.state;
        return (
            <div className={styles.container}>
                <img className={styles.image} src='https://i.ibb.co/7QpKsCX/image.png' alt="COVID-19"></img>
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        )
    }
}

export default App;