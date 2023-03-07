import React, { useState, useEffect, useMemo } from 'react'
import { URL_ALL_COMICS, URL_ALL_SERIES } from '../../utils/api_url'

const Home = (props) => {
	const [comics, setComics] = useState([])
	const [series, setSeries] = useState([])

	useEffect(() => {
		// fetchComics()
		// fetchSeries()
	}, [])

	const fetchComics = async () => {
		const response = await fetch(`${URL_ALL_COMICS}&limit=2`).then((res) => res.json())
		setComics(response)
	}

	const fetchSeries = async () => {
		const response = await fetch(URL_ALL_SERIES).then((res) => res.json())
		setSeries(response)
	}

	return (
		<div>
			<p>Home</p>
			<ul>
				<li>
					<a href='/characters'>Characters</a>
				</li>
				<li>
					<a href='/comics'>Comics</a>
				</li>
				<li>
					<a href='/series'>Series</a>
				</li>
			</ul>
		</div>
	)
}

export default Home
