import GlobalStyles from './globalStyles';
import Login from './components/login/Login';
import Header from './components/header/Header';

function App() {
	return (
		<div className="App">
			<GlobalStyles />
			<Header />
			<Login />
		</div>
	);
}

export default App;
