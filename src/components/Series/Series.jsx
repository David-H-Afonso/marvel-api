/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { URL_ALL_SERIES } from '../../utils/api_url'
import Card from '../Card/Card'
import '../../assets/CardLists.scss'

const Series = (props) => {
	const [series, setSeries] = useState([])
	const [pageNumber, setPageNumber] = useState(1)

	useEffect(() => {
		fetchSeries()
	}, [pageNumber])

	const OFFSET_VALUE = 283

	const fetchSeries = async () => {
		const response = await fetch(`${URL_ALL_SERIES}&offset=${OFFSET_VALUE * pageNumber}&limit=12`).then((res) =>
			res.json()
		)
		setSeries(response)
	}

	const navigateToSerie = (info) => {
		window.open(info?.urls[0]?.url, '_blank')
	}

	const changePage = (nextOrPrev) => {
		if (nextOrPrev) {
			if (pageNumber >= 5) return
			setPageNumber(pageNumber + 1)
			window.scrollTo(0, 0)
			return
		}
		if (pageNumber <= 1) return
		setPageNumber(pageNumber - 1)
		window.scrollTo(0, 0)
		return
	}

	return (
		<div className='mainWrapper'>
			<h1>Series</h1>
			<div className='mainContainer'>
				{series?.data?.results?.map((serie) => (
					<Card
						info={serie}
						title={serie.title}
						description={serie.description}
						key={serie.id}
						goToDetails={navigateToSerie}
					/>
				))}
			</div>
			<div className='pagination'>
				<p className='prePage' onClick={() => changePage(false)}>
					←
				</p>
				<p className='actualPage'>{pageNumber}</p>
				<p className='nextPage' onClick={() => changePage(true)}>
					→
				</p>
			</div>
		</div>
	)
}

export default Series
