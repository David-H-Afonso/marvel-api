import Header from './components/Header/Header'
import Router from './Router'
import { RouterProvider } from 'react-router'

function App() {
	return (
		<div>
			<Header />
			<RouterProvider router={Router} />
		</div>
	)
}

export default App
