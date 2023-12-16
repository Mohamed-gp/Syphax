import React from 'react'

const Header = () => {
    return (
        <div>
            <header className='text-white bg-red-500 py-4'>
                <nav className="container flex justify-evenly">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                    <a href="#contact">Blog</a>
                </nav>
            </header>
            
        </div>
    )
}

export default Header