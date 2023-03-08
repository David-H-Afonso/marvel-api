import React from 'react'
import { Link } from 'react-router-dom'
import { charactersURL, comicsURL, homeURL, seriesURL } from '../../utils/routes'
import './Header.scss'

const Header = (props) => {
	return (
		<div className='header'>
			<div className='headerFixed'>
				<div className='headerLinks'>
					<Link to={homeURL}>Home</Link>
					<Link to={charactersURL}>Characters</Link>
					<Link to={comicsURL}>Comics</Link>
					<Link to={seriesURL}>Series</Link>
				</div>
			</div>
		</div>
	)
}

export default Header
