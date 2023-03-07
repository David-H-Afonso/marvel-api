import React, { useState, useEffect } from 'react'
import { URL_ALL_CHARACTERS } from '../../utils/api_url'
import Card from '../Card/Card'
import '../../assets/CardLists.scss'

const Characters = (props) => {
	const [characters, setCharacters] = useState([])

	useEffect(() => {
		fetchCharacters()
	}, [])

	const fetchCharacters = async () => {
		const response = await fetch(`${URL_ALL_CHARACTERS}&offset=87&limit=12`).then((res) => res.json())
		setCharacters(response)
	}

	return (
		<div className='mainWrapper'>
			<h1>Characters</h1>
			<div className='mainContainer'>
				{characters?.data?.results?.map((character) => (
					<Card info={character} title={character.name} description={character.description} key={character.id} />
				))}
			</div>
		</div>
	)
}

export default Characters
