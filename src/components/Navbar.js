import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <header>
        <div className='container'>
            <div className='inner-content'>
                <div className='brand'>
                    <Link to="/">Movie Clone</Link>
                </div>

                <ul className='nav-links'>
                    

                    <li>
                        <Link to='/watched'>See Favorites</Link>
                    </li>

                    
                </ul>
            </div>
        </div>
    </header>
  )
}
