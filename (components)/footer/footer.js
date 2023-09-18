import React from 'react'
import style from '../../style/footer/footer.module.css';
import Link from 'next/link';
import { PiWhatsappLogoThin } from 'react-icons/pi';
import { FaLinkedinIn } from 'react-icons/fa'
import { RiYoutubeLine } from 'react-icons/ri';
import { AiOutlineInstagram } from 'react-icons/ai'

function Footer() {
    return (
        <div className={style.footer }>

            <div className={style.footerInfo} >
                <div className={style.contactField}>
                    <p className={style.footerHeading}>Contact Us</p>
                    <p className={style.footerFont}> Send us an Email </p>
                    <a href='mailto:appear.interior@gmail.com'>
                        <p className={style.mail}>appear.interior@gmail.com</p>
                    </a>
                </div>

                <div className={style.adressField}>
                    <p className={style.footerHeading}>Adress</p>
                  <a target='_blank' href='https://www.google.com/maps/place/Appears+interior+studio/@31.4149604,73.1096488,16z/data=!4m6!3m5!1s0x39226942ceaf7515:0x2fe0993749530320!8m2!3d31.4138159!4d73.1134039!16s%2Fg%2F11mtdcfcnk?entry=ttu'>
                    <p className={style.footerFont}>Nazimabad, Shah chowk, Near Punjab Faisalabad</p> 
                    </a>
                </div>
            </div>


            <div className={style.iconsMain1}>
            <div className={style.FollowContainer}>
            <p className={`${style.Follow} title`}>工作室</p>
              <p className={`${style.Follow} title`}>微信</p>
              </div>
                {/* <ul className={style.IconsContainer}>

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
                  </li>
                </ul> */}
              </div>
        </div>
    )
}

export default Footer;