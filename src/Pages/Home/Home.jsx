import React from 'react'
import './Home.css'
import propic from '../../assests/propic.jpg';

const Home = () => {
    return (
        <div className='Home'>
            <div className='Header'>
                <img src={propic} className='ProPic'></img>
                <div className='SkillsBar'>

                </div>
            </div>
            <div className='About'>
                <h1>About</h1>
            </div>

        </div>
    )
}

export default Home
