import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Planets = props => {
    const [planets, setPlanets] = useState(null);
    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${props.id}`)
        .then(response => {
            setPlanets(response.data)
            console.log(response.data)
        })
        .catch(err => console.log(err))
    }, [props])
    return(
        <>
        {
            planets ? 
            <>
                <h1>{planets.name}</h1>
                <h3>Climate: {planets.climate}</h3>
                <h3>Terrain: {planets.terrain}</h3>
                <h3>Surface Water: {planets.surface_water}%</h3>
                <h3>Population: {planets.population}</h3>
            </> : ""
        }
        </>
    )
}
export default Planets;