import React from 'react'
import './Home.css'
import propic from '../../assests/propic.jpg';

;

const Home = () => {

    return (

        <div className='Home'>

            <div className='Header'>
                <img src={propic} alt='profile' className='ProPic'></img>
                <div className='SkillsBar'>
                    <h1>Skills</h1>
                    <ul className="Skills">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>React</li>
                        <li>Adobe Creative</li>
                    </ul>
                </div>
            </div>
            <hr></hr>
            <div className='About'>
                <h1>Sebastian Arnavat</h1>
                <p>I am a Front-End Web Developer with a Certificate in Full Stack Web Development from Wyncode Academy and the University of Miami and additional Certificates in HTML 5 and CSS Fundamentals from W3Cx. I have core competencies in HTML5, CSS3, Bootstrap, JavaScript, React, and MongoDB. I also have a background in Marketing and International Business and have worked in various communications roles.</p>
            </div>



        </div>
    )
}

export default Home;
