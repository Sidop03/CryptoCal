import './App.css';
import Convertor from './Convertor';
import About from './pages/About';
import {Route,Routes} from "react-router-dom";
import Profile from './pages/Profile';

function App() {
	return (
		<>
			<Navigation/>
				<Routes>
					<Route path="/convertor" element={<Convertor/>}/>
					<Route path="/" element={<Convertor/>}/>
					<Route path="*" element={<Convertor/>}/>
				</Routes>
			
		</>
	);
}

export default App;
