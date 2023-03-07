import React from 'react'

const ComicCard = (props) => {
	const { comic } = props

	const comicInfo = {
		name: comic.title || 'Name not found',
		description: comic.description || 'Description not found',
		image: `${comic.thumbnail.path}.${comic.thumbnail.extension}`.replace('http', 'https'),
	}

	return (
		<div onClick={''}>
			<img src={comicInfo.image} alt={comic.name} style={{ width: 50 }} />
			<h2>{comicInfo.name}</h2>
			<p>{comicInfo.description}</p>
		</div>
	)
}

export default ComicCard
