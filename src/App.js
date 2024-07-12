import './App.css';
import Convertor from './Convertor';
import {Route,Routes} from "react-router-dom";

function App() {
	return (
		<>
				<Routes>
					<Route path="/convertor" element={<Convertor/>}/>
					<Route path="/" element={<Convertor/>}/>
					<Route path="*" element={<Convertor/>}/>
				</Routes>
			
		</>
	);
}

export default App;
