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
        <>
          <h2> Pokemon:</h2>
          <h1> {pokemon?.name}! </h1>
          <img src={pokemon?.sprites?.front_shiny} alt={pokemon?.name} />
        </>
      )
    }else {
      return (
        <>
          <h2> Pokemon:</h2>
          <h1> {pokemon?.name}! </h1>
          <img src={pokemon?.sprites?.front_default} alt={pokemon?.name} />
        </>
      )
    }
}
