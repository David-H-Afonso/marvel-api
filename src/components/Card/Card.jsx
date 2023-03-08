import React from 'react'
import './Card.scss'

const Card = (props) => {
	const { info, title, description, goToDetails } = props

	const cardInfo = {
		name: title || 'Name not found',
		description: description || 'Description not found',
		image: `${info.thumbnail.path}.${info.thumbnail.extension}`.replace('http', 'https'),
	}

	return (
		<div className='card' onClick={() => goToDetails(info)}>
			<img src={cardInfo.image} alt={cardInfo.title} className='infoImage' />
			<h1 className='infoTitle'>{cardInfo.name}</h1>
			<p className='infoDescription'>{cardInfo.description}</p>
		</div>
	)
}

export default Card
