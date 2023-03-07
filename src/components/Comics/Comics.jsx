import React, { useState, useEffect } from 'react'
import { URL_ALL_COMICS } from '../../utils/api_url'
import ComicsCard from './ComicsCard'

const Comics = (props) => {
	const [comics, setComics] = useState([])

	useEffect(() => {
		fetchComics()
	}, [])

	const fetchComics = async () => {
		const response = await fetch(`${URL_ALL_COMICS}&limit=5`).then((res) => res.json())
		setComics(response)
	}

	return (
		<div>
			<p>Comics</p>
			{comics?.data?.results?.map((comic) => (
				<ComicsCard comic={comic} key={comic.id} />
			))}
		</div>
	)
}

export default Comics
