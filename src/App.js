import './App.css';
import Convertor from './Convertor';
import {Route,Routes} from "react-router-dom";
import Navigation from './Navigation';


function App() {
	return (
		<>
			<Navigation/>
				<Routes>
					<Route path="/" element={<Convertor/>}/>
					<Route path="/convertor" element={<Convertor/>}/>
				</Routes>
		</>
	);
}

export default App;
