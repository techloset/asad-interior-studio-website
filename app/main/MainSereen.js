"use client";
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import style from '../../style/home/homeScreen.module.css';
import '../../app/globals.css'
import Link from 'next/link';
import { PiWhatsappLogoThin } from 'react-icons/pi';
import { FaLinkedinIn } from 'react-icons/fa';
import { RiYoutubeLine } from 'react-icons/ri';
import { AiOutlineInstagram } from 'react-icons/ai'
import Navbar from '../../(components)/navbar/navbar';

function MainScreen() {


  const [text, setText] = useState('Design is our tool to create inspiring experiences that empower people and communities.');
  const [hover, setHover] = useState(false);

  const [secondHover, setSecondHover] = useState(false);
  const [thirdHover, setThirdHover] = useState(false);
  const [forthHover, setForthHover] = useState(false);
  const [fifthHover, setFifthHover] = useState(false);
  const [sixthHover, setSixthHover] = useState(false);

  const mouseEnterMainFisrt = () => {
    setText('2023: An Optimistic Future A Place to experience everyday life in an optimistic future')
    setHover(true)
  };

  const mouseOutMainFisrt = () => {
    setText('Design is our tool to create inspiring experiences that empower people and communities.')
    setHover(false)
  };

  const mouseEnterMainSec = () => {
    setText('Mobile Mercantile Reimagining the business of retail');
    setSecondHover(true);
  };

  const mouseLeaveMainSec = () => {
    setText('Design is our tool to create inspiring experiences that empower people and communities.')
    setSecondHover(false)
  };

  const mouseEnterThird = () => {
    setText('Full Moon Reflected on the Ocean experiences that empower people and communites');
    setThirdHover(true)
  };

  const mouseLeaveThird = () => {
    setText('Design is our tool to create inspiring experiences that empower people and communities.');
    setThirdHover(false)
  };

  const mouseEnterFouth = () => {
    setText('The Studio A collective mind of diverse individuals');
    setForthHover(true)
  }

  const mouseLeaveFouth = () => {
    setText('Design is our tool to create inspiring experiences that empower people and communities.');
    setForthHover(false)
  };

  const mouseEnterfifth = () => {
    setText('Daniles Regent Park Community driven design.')
    setFifthHover(true)
  }

  const mouseLeavefifth = () => {
    setText('Design is our tool to create inspiring experiences that empower people and communities.')
    setFifthHover(false)
  };

  const mouseEnterSixth = () => {
    setText('Refuge in the sky Balancing famaliarity with novelty');
    setSixthHover(true)
  }

  const mouseLeaveSixth = () => {
    setText('Design is our tool to create inspiring experiences that empower people and communities.')
    setSixthHover(false);
  }

 

  
  
  
  return (
    <div className={style.mainParent}>
      <Navbar inHome={true} />
      <div className={style.homeContentParent}>

 
      <Link href={'/'}>  <div className={ style.logo}>
               <h1 className='text-3xl'><b>mason studio</b></h1>
            </div> </Link>

        

        <p className={style.contentParagraph}>{text}</p>

        <div className={style.iconsMain}>
              <div className={style.FollowContainer}>
                <p >©2023 Mason Studio Inc. </p>
              </div>
              <div className={style.iconsMain1}>
                <ul className={style.IconsContainer}>
                  
{/* 
                  <li>
                    <a
                     href='https://wa.me/923227173333'
                     target='_blank'
                    >
                      <PiWhatsappLogoThin className={style.icon}  />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.linkedin.com/in/zahir-saleem-aab545281/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedinIn className={style.icon} />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.youtube.com/@appearstudio"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <RiYoutubeLine className={style.icon} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/appears.interiors/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiOutlineInstagram className={style.icon} />
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>

      </div>

      <div className={style.imagesSection}>

        <div className={style.imageFirstPortion}>

          <div onMouseEnter={mouseEnterMainFisrt} onMouseLeave={mouseOutMainFisrt} className={hover ? style.mainImageOneHover : style.mainImageOne} >
            <Link href={`/projects/2033-an-optimistic-future`}>  <Image alt='homeFirstImage' className={style.myImage} src={'/homeScreen/InteriorInstaTwo.jpg'}
              fill={true}
            />   </Link>
          </div>

          <div className={style.bothImages}>
            <div onMouseEnter={mouseEnterMainSec} onMouseLeave={mouseLeaveMainSec} className={secondHover ? style.mainImageTwoHover : style.mainImageTwo}>
              <Link href={`/projects/runxi-residence-phase-1`}>  <Image alt='homeSecondImage' className={style.myImage} src={'/homeScreen/InteriorInstaOne.jpg'}
                fill={true}
              /> </Link>
            </div>

            <div onMouseEnter={mouseEnterThird} onMouseLeave={mouseLeaveThird} className={thirdHover ? style.homeImageThreeHover : style.homeImageThree} >
              <Link href={`/projects/full-moon-reflected-on-the-ocean-at-01-34`}> <Image alt='homeThirdImage' className={style.myImage} src={'/homeScreen/homeThird.jpg'}
                fill={true}
              /> </Link>
            </div>
          </div>
        </div>
                      
        <div className={style.imageSecondPortion}>
          <div className={style.bothImages}>
            <div onMouseEnter={mouseEnterFouth} onMouseLeave={mouseLeaveFouth} className={forthHover ? style.mainImageFourthHover : style.mainImageFourth}>
              <Link href={`/about`}>  <Image alt='homeFourthImage' className={style.myImage} src={'/homeScreen/InteriorInstaFour.jpg'}
                fill={true}
              /> </Link>
            </div>

            <div onMouseEnter={mouseEnterfifth} onMouseLeave={mouseLeavefifth} className={fifthHover ? style.homeImageFifthHover : style.homeImageFifth}>
              <Link href={`/projects/dueast`}>  <Image alt='homeFifthImage' className={style.myImage} src={'/homeScreen/homeFifth.jpg'}
                fill={true}
              /> </Link>
            </div>
          </div>

          <div onMouseEnter={mouseEnterSixth} onMouseLeave={mouseLeaveSixth} className={sixthHover ? style.mainImageSixthHover : style.mainImageSixth} >
            <Link href={`/projects/refuge-in-the-sky`} > <Image alt='homeSixthImage' className={style.myImage} src={'/homeScreen/InteriorInstaThree.jpg'}
              fill={true}
            /> </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default MainScreen;