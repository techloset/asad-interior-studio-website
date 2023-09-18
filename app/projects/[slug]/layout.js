import React from 'react'
import { RxCross1 } from 'react-icons/rx'
import style from '../../../style/projects/projects.module.css'
import Link from 'next/link'
import Footer from '../../../(components)/navbar/navbar'

const layout = ({children}) => {
  return (
   <div>

    <div className={style.navIconCross}>
    <Link  href={'/projects'}>  <RxCross1 className={style.crossSlug} fontSize={25} /> </Link> 
    </div>
    {children}
      <Footer/>
   </div>
  )
}

export default layout