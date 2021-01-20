import React from 'react'
import './Home.css'
import propic from '../../assests/propic.jpg';

;

const Home = () => {

    return (

        <div className='Home'>

            <div className='Header'>
                <img src={propic} className='ProPic'></img>

                <div className='SkillsBar'>
                    <h1>Skills</h1>
                    <ul className="Skills">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>React</li>
                    </ul>

                </div>
            </div>
            <hr></hr>

            <div className='About'>

                <h1>Sebastian Arnavat</h1>
                <p>kfslfjkdfns</p>
            </div>



        </div>
    )
}

export default Home
