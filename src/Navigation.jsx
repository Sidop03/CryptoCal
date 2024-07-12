import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
	return (
		<nav>
			<li><Link to="/about"><button>About</button></Link></li>
			<li><Link to="/convertor"><button>Convertor</button></Link></li>
		</nav>
	)
}

export default Navigation