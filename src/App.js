import './App.css';
import Convertor from './Convertor';
import NotFound from './pages/NotFound';
import About from './pages/About';
import {Route,Routes} from "react-router-dom";
import Navigation from './Navigation';
import Profile from './pages/Profile';

function App() {
	return (
		<>
			<Navigation/>
				<Routes>
					<Route path="/convertor" element={<Convertor/>}/>
					<Route path="/about" element={<About/>}/>
					<Route path="*" element={<NotFound/>}/>
					<Route path='/user/:UserName/:project' element={<Profile/>}/>
				</Routes>
			
		</>
	);
}

export default App;
