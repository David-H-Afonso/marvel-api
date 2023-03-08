import React from 'react'
import '../Details/Details.scss'

const Details = (props) => {
	const { info } = props

	const image = `${info.thumbnail.path}.${info.thumbnail.extension}`.replace('http', 'https')

	return (
		<div className='detailsContainer'>
			<div className='metaContainer'>
				<img src={image} alt={info.title} className='detailsImage' />
				<div className='infoContainer'>
					<h1 className='detailsTitle'>{info.name}</h1>
					<div className='detailsDescription'>
						<p>{info.description}</p>
						<p>
							It has appeared in <u>{info.comics.available} comics</u>
						</p>
					</div>
					<div className='moreInfo'>
						{info?.urls[0]?.url && (
							<a href={info.urls[0].url} target='_blank' rel='noreferrer'>
								More Details
							</a>
						)}
						{info?.urls[1]?.url && (
							<a href={info.urls[1].url} target='_blank' rel='noreferrer'>
								Wiki
							</a>
						)}
						{info?.urls[2]?.url && (
							<a href={info.urls[2].url} target='_blank' rel='noreferrer'>
								Comics with {info.name}
							</a>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Details
