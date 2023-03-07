import { createBrowserRouter } from 'react-router-dom'

import Home from './components/Home/Home'
import Characters from './components/Characters/Characters'
import NoPage from './components/NoPage/NoPage'
import Comics from './components/Comics/Comics'
import Series from './components/Series/Series'

const Router = [
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/characters',
		element: <Characters />,
	},
	{
		path: '/comics',
		element: <Comics />,
	},
	{
		path: '/series',
		element: <Series />,
	},
	{
		path: '*',
		element: <NoPage />,
	},
]

export default createBrowserRouter(Router)
