import React from 'react'
import HomeLink from './HomeLink'
import './Home.scss'
import { charactersURL, comicsURL, seriesURL } from '../../utils/routes'

const Home = (props) => {
	const homePage = [
		{
			id: 0,
			title: 'Characters',
			description: 'Check some of the Marvel characters',
			image: require('../../assets/characters.png'),
			link: charactersURL,
		},
		{
			id: 1,
			title: 'Comics',
			description: 'Check some amazing Marvel comics',
			image: require('../../assets/comics.jpg'),
			link: comicsURL,
		},
		{
			id: 2,
			title: 'Series',
			description: 'Check some top level Marvel series',
			image: require('../../assets/series.png'),
			link: seriesURL,
		},
	]

	return (
		<div className='mainWrapper'>
			<h1>Home Page</h1>
			<div className='mainHome'>
				{homePage?.map((homeUrl) => (
					<HomeLink
						info={homeUrl}
						title={homeUrl.title}
						description={homeUrl.description}
						image={homeUrl.image}
						key={homeUrl.id}
						link={homeUrl.link}
						isHomePage
					/>
				))}
			</div>
		</div>
	)
}

export default Home
