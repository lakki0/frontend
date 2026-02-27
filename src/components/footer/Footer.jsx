import React from 'react'
import style from "./footer.module.css"
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={style.container}>
      <div >
        <p>Copyright &copy; 2024. All rights reserved.</p>
      </div>
      <div className={style.social}>
        <Image src='/1.png' width={15} height={15} className={style.icon} alt="facebook" />
        <Image src='/2.png' width={15} height={15} className={style.icon} alt="instagram" />
        <Image src='/3.png' width={15} height={15} className={style.icon} alt="twitter" />
      </div>
    </div>
  )
}

export default Footer
