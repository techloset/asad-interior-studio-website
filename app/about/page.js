import Link from 'next/link';
import React from 'react'
import AboutHero from './aboutHero/aboutHero';
import AboutData from './aboutData/aboutData';

function About() {
    return (
        <div>
           <AboutHero/>
           <AboutData/>
        </div>
    )
}

export default About;