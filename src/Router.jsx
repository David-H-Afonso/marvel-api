import { createBrowserRouter } from 'react-router-dom'
import { charactersURL, comicsURL, homeURL, noPageURL, seriesURL } from './utils/routes'

import Home from './components/Home/Home'
import Characters from './components/Characters/Characters'
import NoPage from './components/NoPage/NoPage'
import Comics from './components/Comics/Comics'
import Series from './components/Series/Series'

const Router = [
	{
		path: homeURL,
		element: <Home />,
	},
	{
		path: charactersURL,
		element: <Characters />,
	},
	{
		path: comicsURL,
		element: <Comics />,
	},
	{
		path: seriesURL,
		element: <Series />,
	},
	{
		path: noPageURL,
		element: <NoPage />,
	},
]

export default createBrowserRouter(Router)
