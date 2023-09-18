'use client'
import Image from 'next/image';
import React, { useState } from 'react'
import style from '../../style/navbar/navbar.module.css'
import { AiOutlineMenu } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';
import '../../app/globals.css'
import Link from 'next/link';
import { PiWhatsappLogoThin } from 'react-icons/pi';
import { FaLinkedinIn } from 'react-icons/fa';
import { RiYoutubeLine } from 'react-icons/ri';
import { AiOutlineInstagram } from 'react-icons/ai'

function Navbar({ inHome }) {
  console.log('res', inHome);


  const [navStyle, setNavStyle] = useState(false);

  const onClickLinks = () => {
    setNavStyle(false)
  }


  return (
    <div className={navStyle ? style.main : style.mainNone}>
      <AiOutlineMenu onClick={function () {
        setNavStyle(true)
      }} className={inHome ? (navStyle ? style.homeBurgerNone : style.homeBurger) : (navStyle ? style.navImageNone : style.navImage ) }  fontSize={25} />





      <RxCross1 onClick={function () {
        setNavStyle(false)
      }} className={inHome ? (navStyle ? style.navImageCrossHome : style.navImageCrossNonehOME) : (navStyle ? style.navImageCross : style.navImageCrossNone ) } fontSize={25} />

      <div className={style.navContentFlex}>

        <div className={navStyle ? style.parentContent : style.parentContentNone}>
          <Link href={'/'}> <b> <h3 onClick={function () {
            setNavStyle(false)
          }} className={style.navItemMain}>mason studio</h3> </b></Link>
          <div className={style.hrTag}></div>
          <Link href={'/projects'}> <h2 onClick={onClickLinks} className={style.navItem}>Projects</h2> </Link>
          <div className={style.hrTag}></div>
          <Link href={'/about'} >  <h2 onClick={onClickLinks} className={style.navItem}>About</h2> </Link>
          <div className={style.hrTag}></div>

        </div>

        <div className={navStyle ? style.footer : style.footerNone}>

          <div className={style.footerInfo} >
            <div className={style.contactField}>
              <p className={style.footerHeading}>Contact Us</p>
              <p className={style.fontSize}> Send us an Email </p>
              <a href='mailto:appear.interior@gmail.com'>
                <p className={style.mail}>appear.interior@gmail.com</p>
              </a>
            </div>

            <div className={style.adressField}>
              <p className={style.footerHeading}>Adress</p>
            <Link target={'_blank'} href={'https://www.google.com/maps/place/Appears+interior+studio/@31.4149604,73.1096488,16z/data=!4m6!3m5!1s0x39226942ceaf7515:0x2fe0993749530320!8m2!3d31.4138159!4d73.1134039!16s%2Fg%2F11mtdcfcnk?entry=ttu'} > <p className={style.fontSize}>Nazimabad, Shah chowk, Near Punjab Faisalabad</p> </Link> 
            </div>
          </div>

          <div className={style.iconsMain}>
            <div className={style.FollowContainer}>
              <p className={`${style.Follow} title`}>工作室</p>
              <p className={`${style.Follow} title`}>微信</p>
            </div>

            {/* <div className={style.iconsMain1}>
              <ul className={style.IconsContainer}>

                <li>
                  <a
                    href='https://wa.me/7566445454'
                    target='_blank'
                  >
                    <PiWhatsappLogoThin className={style.icon} />
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
                </li>
              </ul>
            </div>  */}

           </div>
        </div>

      </div>



    </div>
  )
}

export default Navbar;