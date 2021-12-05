import React from 'react'
import { Link } from 'react-router-dom'

export const Navigation = () => {
    return (
        <div className="navigation">
            <img src="https://play-lh.googleusercontent.com/0rgPYj0GwZ6txpYZrzoMdhwzqg7vY6C9B-Ol7jlaz-Ox2rgpD4Tr82ZgDqkirrEohbGm=w412-h220-rw" alt="logo" />
            <ul>
                <Link to='/'>
                    <li><i class="fas fa-home"></i>
                        Home
                    </li>
                </Link>
          <Link to='/movies'>
                    <li><i class="fas fa-video"></i>
                        Movies
                    </li>
          </Link>
                <Link to='/about'>
                    <li><i class="far fa-question-circle"> </i>
                     About
                    </li>
                </Link>
            </ul>
            
        </div>
    )
}
