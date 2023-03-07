import React, { useState, useEffect } from 'react'
import { URL_ALL_COMICS } from '../../utils/api_url'
import Card from '../Card/Card'
import '../../assets/CardLists.scss'

const Comics = (props) => {
	const [comics, setComics] = useState([])

	useEffect(() => {
		fetchComics()
	}, [])

	const fetchComics = async () => {
		const response = await fetch(`${URL_ALL_COMICS}&offset=25&limit=12`).then((res) => res.json())
		setComics(response)
	}

	return (
		<div className='mainWrapper'>
			<h1>Comics</h1>
			<div className='mainContainer'>
				{comics?.data?.results?.map((comic) => (
					<Card info={comic} title={comic.title} description={comic.description} key={comic.id} />
				))}
			</div>
		</div>
	)
}

export default Comics
