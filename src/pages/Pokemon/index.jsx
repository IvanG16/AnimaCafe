import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import './Pokemon.css'

export const Pokemon = () => {
    const [pokemon, setPokemon] = useState({})
    const { pokemonId } = useParams()
    const randomeNumber = Math.floor(Math.random() * 1025)

    useEffect(() => {
      async function fetchData() {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        setPokemon(await response.json())
      }
      fetchData()
    }, [])

    console.log(`${randomeNumber} : ${pokemon?.id}`)

    if(randomeNumber === pokemon.id){
      return (
        <div className="grassy-background">
          <h2> Pokemon:</h2>
          <h1> {pokemon?.name}! </h1>
          <div className="encounter">
            <img className="grass" src="https://tiermaker.com/images/chart/chart/pokemon-tall-grass-overworld-textures-363297/lgpepng.png" alt="tall grass" />
            <img className="grass" src={pokemon?.sprites?.front_shiny} alt={pokemon?.name} />
          </div>
        </div>
      )
    }else {
      return (
        <div className="grassy-background">
          <h2> Pokemon:</h2>
          <h1> {pokemon?.name}! </h1>
          <div className="encounter">
            <img className="grass" src="https://tiermaker.com/images/chart/chart/pokemon-tall-grass-overworld-textures-363297/lgpepng.png" alt="tall grass" />
            <img className="grass" src={pokemon?.sprites?.front_default} alt={pokemon?.name} />
          </div>
        </div>
      )
    }
}
