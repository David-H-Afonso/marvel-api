import React from 'react'

const CharacterCard = (props) => {
	const { character } = props

	const characterInfo = {
		name: character.name || 'Name not found',
		description: character.description || 'Description not found',
		image: `${character.thumbnail.path}.${character.thumbnail.extension}`.replace('http', 'https'),
	}

	return (
		<div onClick={''}>
			<img src={characterInfo.image} alt={character.name} style={{ width: 50 }} />
			<h2>{characterInfo.name}</h2>
			<p>{characterInfo.description}</p>
		</div>
	)
}

export default CharacterCard
