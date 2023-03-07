import React, { useState, useEffect } from 'react'
import { URL_ALL_SERIES } from '../../utils/api_url'
import Card from '../Card/Card'
import '../../assets/CardLists.scss'

const Series = (props) => {
	const [series, setSeries] = useState([])

	useEffect(() => {
		fetchSeries()
	}, [])

	const fetchSeries = async () => {
		const response = await fetch(`${URL_ALL_SERIES}&offset=283&limit=12`).then((res) => res.json())
		setSeries(response)
	}

	console.log('series =>', series)

	return (
		<div className='mainWrapper'>
			<h1>Series</h1>
			<div className='mainContainer'>
				{series?.data?.results?.map((serie) => (
					<Card info={serie} title={serie.title} description={serie.description} key={serie.id} />
				))}
			</div>
		</div>
	)
}

export default Series
