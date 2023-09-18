import React from 'react';
import style from '../../../style/about/aboutData.module.css'
import Link from 'next/link';
import { PiWhatsappLogoThin } from 'react-icons/pi';
import { AiOutlineYoutube } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa'
import Footer from '../../../(components)/footer/footer';

function AboutData() {
    const data = [
        {
            history: '2020 - ACD Awards / Resilient Retail Concept',
        },
        {
            history: '2019 - Gold Key Awards / Kimpton Saint George Hotel',
        },
        {
            history: '2019 - ARIDO / Award of Excellence - Kimpton Saint George Hotel',
        },
        {
            history: '2019 - World Interiors / Gold - Jing an Townhouse, Shanghai',
        },
        {
            history: '2019 - Restaurant & Bar Design Awards / Virtuous Pie',
        },
        {
            history: '2019 - ARIDO / Award of Merit - Virtuous Pie',
        },
        {
            history: '2019 - Canadian Interiors / Best of Canada - PurParket',
        },
        {
            history: '2019 - IDS / Best Booth Design',
        },
        {
            history: '2018 - ARIDO / Award of Merit: Andaz Hotel',
        },
        {
            history: '2018 - ARIDO / Award of Merit: Picnic Food',
        },
        {
            history: '2018 - Best of Canada Awards / Andaz Hotel',
        },
        {
            history: '2018 - Best of Canada Awards / Picnic Food',
        },
        {
            history: '2017 - ARIDO / Award of Merit: La Banane',
        },
        {
            history: '2016 - ARIDO / Award of Merit: Cabin Residences',
        },
        {
            history: '2015 - ARIDO / Award of Merit: Village Juicery',
        }
    ];

    let Press = [
        {
            data: '2023 - Office Snapshots / Mason Studio Integrated Workspace'
        },
        {
            data: '2023 - Trend Hunter / Mason Studio Redesigned Its Toronto Office For "The Greater '
        },
        {
            data: '2023 - BluPrint Magazine / Work and Inspiration: Mason Studio’s Office as an ideal W'
        },
        {
            data: '2023 - FRAME Magazine / Can workplaces foster social wellbeing beyond their own '
        },
        {
            data: '2023 - Canadian Interiors / Creating Engagement - May/June 2023 cover feature'
        },
        {
            data: '2023 - The Toronto Star / Making Contact across Toronto with award-winning photog'
        },
        {
            data: '2023 - Hotelier Magazine / Hotel bathrooms become a focal point for designers'
        },
        {
            data: '2023 - Dezeen / Mason Studio reimagines its Toronto workspace "for the greater good'
        },
        {
            data: '2023 - NUVO Magazine / Design Space: Lady Bird Bar by Mason Studio'
        },
        {
            data: '2022 - Interior Design / 10 Questions with Ashley Rumsey and Stanley Sun'
        },
        {
            data: '2022 - Azure / Communal Condo Kitchen'
        },
        {
            data: '2022 - Designlines / Mason Studio thoughtfully designs Regent Park Condominium'
        },
        {
            data: '2022 - Interior Design / Kimpton Banneker Hotel in Washington, D.C.'
        },
        {
            data: '2022 - Wallpaper / Mason Studio put the focus on local artists in the new Kimpton B'
        },
        {
            data: '2022 - Azure / 8 Inspiring Design Events To Check Out At DesignTO 2022'
        },
        {
            data: '2021 - Forbes / LadyBird Washington DC`s most stylish rooftop bar'
        },
        {
            data: '2021 - Interior Design China / Mason Studio`s New Work - Runxi Residences'
        },
        {
            data: '2021 - Interior Design / Big Ideas - Mobile Retail'
        },
        {
            data: '2021 - House & Home / Tommy Smythe - Latest Designers To Turn His Head'
        },
        {
            data: '2021 - Design Milk / Friday Five'
        },
        {
            data: '2020 - Azure / Rethinking Retail'
        },
        {
            data: '2020 - Designlines / Show Us Where You Live'
        },
        {
            data: '2020 - Interior Design / Mason Studio Designs Minimalist Shanghai Interior'
        },
        {
            data: '2020 - Pure Luxury / The Beauty of Canadian Design'
        },
        {
            data: '2019 - Design Anthology / New Hotels - Kimpton Saint George'
        },
        {
            data: '2019 - Design Milk / Kimpton Saint George Hotel'
        },
        {
            data: '2019 - Toronto Life / Kimpton Saint George Hotel'
        },
        {
            data: '2018 - Wallpaper / Kimpton Saint George Hotel'
        },
        {
            data: '2018 - New York Times / An Ottawa Hotel is an ode to Canada'
        },
        {
            data: '2018 - Canadian Interiors / Best of Canada: Hospitality, Andaz Hotel'
        },
        {
            data: '2018 - Canadian Interiors / Best of Canada: Retail, Picnic Food'
        },
        {
            data: '2018 - Designlines / Step into a A Dreamy Canuck Loo'
        },
        {
            data: '2017 - Wallpaper / Best Urban Hotels 2017: the shortlist'
        },
        {
            data: '2017 - Azure / Canada 150: 30 Canadian Interior Design Studios Making Their Mark'
        },
        {
            data: '2017 - The Telegraph / Andaz Ottawa Byward Market'
        },
        {
            data: '2017 - Designlines / Canada 150: TO Firms Defining Canadian Design'
        },
        {
            data: '2017 - re:Porter / La Banane'
        },
        {
            data: '2016 - Toronto Life / Best Architects and Designers Right Now'
        },
        {
            data: '2015 - Dwell / A Spacious Toronto Triplex Responds to Rising Urban Density'
        },
        {
            data: '2015 - Azure / The Best of Toronto Design Week'
        },
        {
            data: '2014 - Azure / 5 Magical Projects by Mason Studio'
        },
        {
            data: '2013 - Dezeen / Cloud Installation by Mason Studio'
        },
    ]
    return (
        <div>
            <div className={style.parentData}>
                <div className={style.parentFirstSection}>
                    <h2 className={style.mainHeading}>Awards</h2>
                    <div>
                        {
                            data.map((item, i) => {
                                return <>
                                    <p key={i} className={style.paragraphs}>{item.history}</p>
                                </>
                            })
                        }
                    </div>

                </div>

                <div>
                    <h2 className={style.mainHeading}>Press</h2>
                    <div>
                        {
                            Press.map((item, i) => {
                                return <>
                                    <p key={i} className={style.paragraphs}>{item.data}</p>
                                </>
                            })
                        }
                    </div>
                </div>
            </div>
            <div className={style.hrTag}></div>

           <Footer/>

     
        </div>
    )
}

export default AboutData;