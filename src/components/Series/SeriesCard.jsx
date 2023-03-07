import React from 'react'

const SeriesCard = (props) => {
	const { serie } = props

	const serieInfo = {
		name: serie.title || 'Name not found',
		description: serie.description || 'Description not found',
		image: `${serie.thumbnail.path}.${serie.thumbnail.extension}`.replace('http', 'https'),
	}

	return (
		<div onClick={''}>
			<img src={serieInfo.image} alt={serie.name} style={{ width: 50 }} />
			<h2>{serieInfo.name}</h2>
			<p>{serieInfo.description}</p>
		</div>
	)
}

export default SeriesCard
