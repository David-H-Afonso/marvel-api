import React from 'react'
import { Link } from 'react-router-dom'

const HomeLink = (props) => {
	const { title, description, image, link } = props

	return (
		<Link to={link} className='homeLink'>
			<img src={image} alt={title} className='homeImage' />
			<h1 className={'homeTitle'}>{title}</h1>
			<p className='homeDescription'>{description}</p>
		</Link>
	)
}

export default HomeLink
