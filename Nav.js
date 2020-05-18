import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'


const APPID = "93554df041fc50be24dc41455ad747c1"

class Nav extends Component {

    state = {
        isLoading: true,
        temp: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined
    }

    async componentDidMount() {
        try {
            setInterval(async () => {
                const reponse = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=new york,usa&appid=${APPID}&units=metric`)
                const data = await reponse.json()
                console.log(data)


                this.setState({
                    isLoading: false,
                    temp: data.main.temp,
                    city: data.name,
                    country: data.sys.country,
                    humidity: data.main.humidity,
                    description: data.weather[0].description
                })
            }, 5000);
        } catch (e) {
            console.log(e);
        }
    }


    render() {
        return (

            <nav style={{ color: "black" }}>

                <Link to="/"><h3>Home</h3></Link>
                {console.log(this.state.city)}
                {this.state.isLoading ? <h1>Live Weather Update Loading...</h1> :
                    <div>
                        <h1>{this.state.city} </h1>
                        <h1 style={{ color: "black" }}>{this.state.temp} ℃ </h1>
                        <h1 style={{ color: "black" }}>{this.state.description}  </h1>
                   </div>}
            </nav>


        )
    }
}

export default Nav

