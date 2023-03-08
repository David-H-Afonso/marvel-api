import Header from './components/Header/Header'
import { Switch, Route } from 'react-router-dom'
import { charactersURL, comicsURL, homeURL, seriesURL, noPageURL } from './utils/routes'
import './App.scss'

import Home from './components/Home/Home'
import Characters from './components/Characters/Characters'
import Comics from './components/Comics/Comics'
import Series from './components/Series/Series'
import NoPage from './components/NoPage/NoPage'

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path={homeURL} component={Home} />
				<Route exact path={charactersURL} component={Characters} />
				<Route exact path={comicsURL} component={Comics} />
				<Route exact path={seriesURL} component={Series} />
				<Route path={noPageURL} component={NoPage} />
			</Switch>
		</div>
	)
}

export default App
