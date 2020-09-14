import React from 'react';
import NavbarSection from './NavbarSection';
import '../Styles/AboutMe.css';

const AboutMe = () => {
    return (
    <section className="about-me-container" id="aboutme">
        <div className="about-me-title">
            <h1 className="section-title">ABOUT ME</h1>
            <NavbarSection/>
        </div>

        <div className="about-me-info">
            <div className="info-p">
                <p className="initial-info">Hi, my name is <span className="highlighted-info">Eliana Hidalgo</span>, I´m a <span
                        className="highlighted-info">Front-End Developer and Civil Industrial Engineer</span>.
                    I know what you’re thinking, ¿Why did I started in the web development world after my first
                    career in Engineering? Well, the world is constantly changing in more ways than one, and to keep up I need to be agile and evolve with it.
                </p>

                <p>I discovered my interest and later passion on technology some years ago, but it wasn’t till I new
                    about Laboratoria and their seek to train women into the <span className="highlighted-info">tech
                        world</span> and teach them how to <span className="highlighted-info">“learn to learn”</span> that I
                    new this was my chance to immerse myself in this awesome and rising world.
                </p>

                <p>During my time in Laboratoria I gained experience using <span className="highlighted-info">JavaScript and
                        other techniques intensively</span>, to acquire new knowledges, deliver the projects and <span
                        className="highlighted-info">overcome the challenges</span> I was faced with. Thanks to my ten years
                    of experience in other occupations I have learned to <span className="highlighted-info">work in
                        teams</span>, under pression, <span className="highlighted-info">problem solving</span>, decision
                    making, <span className="highlighted-info">adaptability</span> and positive communication. Thanks to the
                    projects that I developed during my time in Laboratoria I enhanced my capacity of <span
                        className="highlighted-info">self-learning</span> and improved my planning and time management. I
                    work under <span className="highlighted-info">agile methodology</span> to improve and optimize each
                    project.
                </p>

                <p>I love <span className="highlighted-info">my family</span>, to <span
                        className="highlighted-info">travel</span>, to <span className="highlighted-info">bake</span> and now I
                    love <span className="highlighted-info">to code</span>. Welcome to my portfolio!</p>
            </div>

        </div>

    </section>
           
        
    )
}

export default AboutMe;
