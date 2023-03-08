/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { URL_ALL_COMICS } from '../../utils/api_url'
import Card from '../Card/Card'
import '../../assets/CardLists.scss'

const Comics = (props) => {
	const [comics, setComics] = useState([])
	const [pageNumber, setPageNumber] = useState(1)

	useEffect(() => {
		fetchComics()
	}, [pageNumber])

	const OFFSET_VALUE = 25

	const fetchComics = async () => {
		const response = await fetch(`${URL_ALL_COMICS}&offset=${OFFSET_VALUE * pageNumber}&limit=12`).then((res) =>
			res.json()
		)
		setComics(response)
	}

	const navigateToComic = (info) => {
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
			<h1>Comics</h1>
			<div className='mainContainer'>
				{comics?.data?.results?.map((comic) => (
					<Card
						info={comic}
						title={comic.title}
						description={comic.description}
						key={comic.id}
						goToDetails={navigateToComic}
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

export default Comics
