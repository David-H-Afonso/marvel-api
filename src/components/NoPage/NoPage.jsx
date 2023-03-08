import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/CardLists.scss'

const NoPage = (props) => {
	return (
		<div className='mainWrapper'>
			<h1>Page not found</h1>
			<Link style={{ textDecoration: 'underline red', color: 'white', fontSize: '3rem', fontFamily: 'Marvel' }} to='/'>
				Return to Home
			</Link>
		</div>
	)
}

export default NoPage
