import {useState, useEffect} from 'react'
import axios from 'axios'
import Loader from "react-loader-spinner"

const api_url = process.env.REACT_APP_API_URL
const api_key = process.env.REACT_APP_API_KEY
export default function Meteo() {
    const [fetched, setFetched] = useState(false)
    const [meteo, setMeteo] = useState(1)
    useEffect(() => {
        if (!fetched) {
            getLocation()
        }
    })

    async function getLocation() {
        if (!fetched) {
            if (navigator.geolocation) {
                await navigator.geolocation.getCurrentPosition((position) => {
                    fetchURl(position.coords.latitude, position.coords.longitude)
                }, error);
            }
            setFetched(true)
        }
    }

    function fetchURl(lat, lng) {
        const url = `${api_url}lat=${lat}&lon=${lng}&units=metric&appid=${api_key}`
        axios.get(url)
            .then(res => {
                let meteoResponse = res.data.weather[0].main
                let temp = res.data.main.temp
                let icon = res.data.weather[0].icon
                let town = res.data.name
                setMeteo({
                    town: town,
                    weather: meteoResponse,
                    temperature: temp,
                    icon: icon
                })
            })
    }

    function error() {
        alert("Geolocalisation impossible");
    }

    return (
        <div>
            <h1>
                {
                    typeof (meteo) === "object"
                        ?
                        <div>
                            <h1>{"A " + meteo.town + ", il fait " + Math.ceil(meteo.temperature) + "°C"}</h1>
                            <span><strong>{meteo.weather}</strong></span>
                            <img src={"http://openweathermap.org/img/wn/" + meteo.icon + ".png"}
                                 alt={meteo.town + " icon"}/>
                        </div>
                        :
                        <Loader
                            type="Rings"
                            color="black"
                        />
                }
            </h1>
        </div>
    )
}