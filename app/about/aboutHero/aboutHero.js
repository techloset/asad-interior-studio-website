import React from 'react'
import style from '../../../style/about/aboutHero.module.css'
import Image from 'next/image';
import Navbar from '../../../(components)/navbar/navbar';
function AboutHero() {
    return (
        <>
        <div className={style.main}>
            <Navbar/>
            <div className={style.firstSection}>
                <div className={style.firstContentSection}>
                    <h1 className={style.mainHeading}>About</h1>
                    <h2 className={style.subHeading}>We have an optimistic view of humanity,
                        and we believe in the potency of using
                        design as a tool for actionable change.
                    </h2>

                    <p className={style.paraGraphs}>
                        At Mason Studio, we design thoughtfully and
                        care deeply, guided by our innate need to
                        “make better”. This is not just to affect the
                        world but to understand both the opportunities
                        we have and the possibilities we can create to
                        bring real value to society, an experience or a
                        personal moment in a meaningful way.
                    </p>

                    <p className={style.paraGraphs}>
                        Our team is diverse academically, culturally and
                        personally - and we bring our whole selves to each
                        of our projects to express the richness of humanity
                        and enhance the value of the design experience. While
                        all our designers are trained in interior design, we have
                        expertise in architecture, furniture design, human sciences,
                        art consultancy, art history, fine arts, textile design,
                        graphic design, business, finance and economics.
                    </p>

                    <p className={style.paraGraphs}>
                        We have had the pleasure of partnering with worldwide clients
                        to co-create unconventional and successful solutions.
                    </p>

                    <p className={style.paraGraphs}>
                        Select clients include:
                    </p>

                    <p className={style.miniParagraph}>
                        Oxford Properties <br/> Gairloch <br/> RioCan <br/> Hazelview Properties <br/>
                        Great Gulf <br/> Lifetime Developments <br/> TAS <br/> Daniels Corporation <br/>
                        Slate Asset Management <br/> Marlin Spring <br/> China Resources <br/> Equinox <br/>
                        Alo Food Group <br/> Hyatt Hotels <br/> Kimpton Hotels <br/> Viceroy Hospitality
                        Group <br/> Kemmons Wilson <br/> Innvest Hotels <br/> Valor Hospitality Partners
                    </p>
                    <hr />
                </div>

                <div className={style.firstImage}>
                    <div >
                        <Image
                            alt='aboutFirstImage'
                            className={style.image}
                            src={'/aboutSection/about.jpg'}
                            fill={true}
                        />
                    </div>


                    <hr className={style.hrTag} />
                </div>

            </div>

            <div className={style.secondSection}>
                <div className={style.secondImage}>
                    <div>
                    <Image
                    alt='aboutSecondImage'
                        src={'/aboutSection/abountSecond.jpg'}
                        fill={true}
                    />
                    </div>
                    <hr className={style.hrTagSecond} />
                </div>

                <div className={style.secondContent}>
                    <div>
                        <p className={style.paraGraphs}>Co-Founder, Executive Director</p>
                        <h1 className={style.mainHeading}>Ashley Rumsey</h1>
                        <p className={style.paraGraphs}>BID HONS, NCIDQ, IDC, ARIDO, LEED AP</p>
                    </div>

                    <div>
                        <p className={style.paraGraphs}>
                        Ashley Rumsey brings the highest standards to both 
                        the design vision of projects and the management of 
                        the Mason Studio team. An advocate of purposeful design, 
                        Ashley has been a key part of the development of Mason 
                        Studio’s innovative research-based process. She ensures 
                        design decisions are thoughtfully evaluated based on their 
                        potential contribution to the end user, design process, 
                        and client’s goals. Her collaborative approach ensures a 
                        broad-based perspective, leveraging the skills and knowledge 
                        of the entire team to fully inform each design project. As a 
                        respected leader in the Canadian design community, Ashley has 
                        also been featured in international design media and regularly 
                        participates in thought leadership at notable conferences and 
                        events.
                        </p>
                    </div>

                    <div>
                        <p className={style.paraGraphs}>Co-Founder, Creative Director</p>
                        <h1 className={style.mainHeading}>Stanley Sun</h1>
                        <p className={style.paraGraphs}>BID HONS, BSC HONS, NCIDQ, IDC, ARIDO, BCIN</p>
                    </div>

                    <div>
                        <p className={style.paraGraphs}>
                        Stanley Sun’s vision is informed by a unique blend of formal 
                        studies in human sciences, fine arts and interior design. 
                        Approaching each challenge with a combined scientific and 
                        humanistic perspective, he first observes how people experience 
                        and react to the built environment to create a rational and 
                        intuitive design solution. Of particular interest to Stanley’s 
                        practice is the science of light and the physiological and 
                        psychological response people have to light. As an advocate for 
                        Canadian design, Stanley has been published widely and has participated 
                        as a keynote speaker at leading design conferences. He is also a 
                        sessional instructor at his alma mater, Toronto Metropolitan University.
                        </p>
                    </div>
                    <hr className={style.contentHr}/>
                </div>
            </div>
        </div>
        </>
    )
}

export default AboutHero;