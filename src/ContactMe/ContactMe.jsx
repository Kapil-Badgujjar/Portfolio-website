import React from 'react'
import styles from './ContactMe.module.scss'
import Button from '../Button/Button'
export default function ContactMe() {
  return (
    <div id="contactme" className={styles.ContactMe}>
      <div className={styles.left}>
          {/* <form actioin="mailto: kapilbadgujjar99@gmail.com" method="post" enctype="text/plain"> */}
            <div>Get in touch</div>
            <input type="email" placeholder='email' />
            <input type="text" placeholder='Your Name' />
            <input type="text" placeholder='Phone Number' />
            <textarea placeholder='Write a message...' />
            {/* <input type="submit" value="Submit"/> */}
            <Button title="Submit"/>
          {/* </form> */}
      </div>
      <div className={styles.right}>
        <div className={styles.myDetails}>
            <div>Hello my name is Kapil Badgujjar</div>
            <div>
                E-mail: kapilbadgujjar99@gmail.com
            </div>
            <div>
                Phone: +91 7988220911
            </div>
            <div>
                Address: VPO Jahazgarh, Jhajjar-124103, Haryana
            </div>
            
        </div>
      </div>
    </div>
  )
}
