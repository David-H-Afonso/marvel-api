import React, { useState, useEffect } from 'react'
import { URL_ALL_CHARACTERS } from '../../utils/api_url'
import CharacterCard from './CharacterCard'

const Home = (props) => {
	const [characters, setCharacters] = useState([])

	useEffect(() => {
		// fetchCharacters()
	}, [])

	const fetchCharacters = async () => {
		const response = await fetch(`${URL_ALL_CHARACTERS}&limit=2`).then((res) => res.json())
		setCharacters(response)
	}

	return (
		<div>
			<p>Characters</p>
			{characters?.data?.results?.map((character) => (
				<CharacterCard character={character} key={character.id} />
			))}
		</div>
	)
}

export default Home
