import React from 'react'
import { Link} from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Bereidingswijze</h1>
            <Link to="/">Home</Link> | <Link to="/About">About</Link>
        </header>
     
    )
}

const headerStyle = {
    background: '#F6EFFF',
    color: '3b3b3b',
    textAlign: 'center',
    padding: '10px'
}

export default Header;