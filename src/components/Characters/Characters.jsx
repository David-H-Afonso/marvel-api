import React, { useState, useEffect } from 'react'
import { URL_ALL_CHARACTERS } from '../../utils/api_url'
import Card from '../Card/Card'
import '../../assets/CardLists.scss'
import Details from '../Details/Details'

const Characters = (props) => {
	const [characters, setCharacters] = useState([])
	const [characterInfo, setCharacterInfo] = useState({})
	const [showCharacters, setShowCharacters] = useState(true)

	useEffect(() => {
		fetchCharacters()
	}, [])

	const fetchCharacters = async () => {
		const response = await fetch(`${URL_ALL_CHARACTERS}&offset=87&limit=12`).then((res) => res.json())
		setCharacters(response)
	}

	const goToDetails = (info) => {
		setCharacterInfo(info)
		setShowCharacters(false)
	}

	return (
		<div className='mainWrapper'>
			<h1>Characters</h1>
			{showCharacters ? (
				<div className='mainContainer'>
					{characters?.data?.results?.map((character) => (
						<Card
							info={character}
							title={character.name}
							description={character.description}
							key={character.id}
							goToDetails={goToDetails}
						/>
					))}
				</div>
			) : (
				<div className='details mainContainer'>
					<p className='goBack' onClick={() => setShowCharacters(true)}>
						← Go back
					</p>
					<Details info={characterInfo} key={characterInfo.id} />
				</div>
			)}
		</div>
	)
}

export default Characters
