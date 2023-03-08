/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { URL_ALL_CHARACTERS } from '../../utils/api_url'
import Card from '../Card/Card'
import '../../assets/CardLists.scss'
import Details from '../Details/Details'

const Characters = (props) => {
	const [characters, setCharacters] = useState([])
	const [characterInfo, setCharacterInfo] = useState({})
	const [showCharacters, setShowCharacters] = useState(true)
	const [pageNumber, setPageNumber] = useState(1)

	useEffect(() => {
		fetchCharacters()
	}, [pageNumber])

	const OFFSET_VALUE = 87

	const fetchCharacters = async () => {
		const response = await fetch(`${URL_ALL_CHARACTERS}&offset=${OFFSET_VALUE * pageNumber}&limit=12`).then((res) =>
			res.json()
		)
		setCharacters(response)
	}

	const goToDetails = (info) => {
		setCharacterInfo(info)
		setShowCharacters(false)
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
			<h1>Characters</h1>
			{showCharacters ? (
				<>
					<div className='mainContainer'>
						{characters?.data?.results?.map((character) => (
							<Card
								info={character}
								title={character.name}
								description={character.description}
								key={character.id}
								goToDetails={goToDetails}
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
				</>
			) : (
				<div className='details mainContainer'>
					<p className='goBack' onClick={() => setShowCharacters(true)}>
						← Go back
					</p>
					<Details info={characterInfo} key={characterInfo.id} />
				</div>
			)}
		</div>
	)
}

export default Characters
