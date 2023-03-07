import React, { useState, useEffect } from 'react'
import { URL_ALL_SERIES } from '../../utils/api_url'
import SeriesCard from './SeriesCard'

const Series = (props) => {
	const [series, setSeries] = useState([])

	useEffect(() => {
		fetchSeries()
	}, [])

	const fetchSeries = async () => {
		const response = await fetch(`${URL_ALL_SERIES}&limit=5`).then((res) => res.json())
		setSeries(response)
	}

	return (
		<div>
			<p>Series</p>
			{series?.data?.results?.map((serie) => (
				<SeriesCard serie={serie} key={serie.id} />
			))}
		</div>
	)
}

export default Series
