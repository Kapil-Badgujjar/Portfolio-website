import React from 'react'
import styles from './ContactMe.module.scss'
import Button from '../Button/Button'
export default function ContactMe() {
  return (
    <div id="contactme" className={styles.ContactMe}>
      <div className={styles.left}>
        <form action="https://formsubmit.co/kapilbadgujjar99@gmail.com" method="POST">
            <div>Get in touch</div>
            <input type="text" name='user_name' placeholder='Your Name' required />
            <input type="email" name='email' placeholder='email' required/>
            <input type="text" name='name' placeholder='Phone Number' required/>
            <textarea name='message' placeholder='Write a message...' required/>
            <input type="submit" value="Submit"/>
          </form>
      </div>
      <div className={styles.right}>
        <div className={styles.myDetails}>
            <h2>You can contact me here</h2>
            <div>
                <h3>E-mail: </h3>
                <hr/>
                <a href="mailto:kapilbadgujjar99@gmail.com" ><h1>kapilbadgujjar99@gmail.com</h1></a>
            </div>
            <div>
                <h3>Phone:</h3> 
                <hr/>
                <a href="tel: +91 7988220911" ><h1>+91 7988220911</h1></a>
            </div>
            <div>
                <h3>Address: </h3>
                <hr/>
                <h2>VPO Jahazgarh, Jhajjar-124103, Haryana</h2>
            </div>
            
        </div>
      </div>
    </div>
  )
}
