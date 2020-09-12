import React from 'react'
import NavbarSection from './NavbarSection';
import '../Styles/Contact.css';
import CV from '../Assets/DownloadDocs/Curriculo-Eliana-H-Front-end_ci.pdf';

const Contact = () => {
    return (
        <section className="contact-container" id="contact">

        <div className="contact-title">
            <h1 className="section-title">CONTACT</h1>
            <NavbarSection/>
        </div>

        <div className="contact-info">
            <div className="contact-paragraph">
                <p>Let’s build something amazing!</p>

                <p>I am available for freelance projects and full-time employment, you are very welcome to contact me.</p>
            </div>

            <div className="contact-important-info">
                <h2 className="name-info">Eliana Hidalgo R.</h2>
                <h4 className="important-info">Front End Developer & Civil Industrial Engineer.</h4>
                

            </div>



            <div className="contact-icons">
                <a href="https://www.linkedin.com/in/hidalgoeliana" target="_blank" rel="noopener noreferrer" title="Connect with me in LinkedIn."><i
                        className="fab fa-linkedin"></i></a>
                <a href="https://github.com/EliHidalgo" target="_blank" rel="noopener noreferrer" title="Go visit my Github profile!"><i
                        className="fab fa-github-square"></i></a>
                <a href="mailto:hidalgoeliana28@gmail.com" title="Send me an email!"><i className="fas fa-envelope"></i></a>
                <a href="https://app.talento.laboratoria.la/profile/9UXFEVDwMGan6BXmMvyDvUzeTBT2" target="_blank" rel="noopener noreferrer"
                    title="Visit my Talent App from Laboratoria!"><i className="fas fa-laptop-code"></i></a>
                <a href={CV} download="Curriculo-Eliana-H-Front-end_ci.pdf" className="btn-cv" title="Download my CV and let's work together!">CV</a>
                {/*  <a href="./Downloadable/Curriculo-Eliana-H-Front-end_ci.pdf" download="" title="Currículum"><i
                    className="fas fa-download"></i></a> */}

            </div>

        </div>

    </section>

    )
}

export default Contact;

