import React from "react";
import styles from "./ContactMe.module.scss";
import emailimg from '/email.png';
import phoneimg from '/phone.png';
import addressimg from '/address.png';
export default function ContactMe() {
  return (
    <div id="contactme" className={styles.ContactMe}>
      <div className={styles.ContactMeContainer}>
        <div className={styles.left}>
          <form
            action="https://formsubmit.co/kapilbadgujjar99@gmail.com"
            method="POST"
          >
            <div>Get in touch</div>
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />
            <input type="email" name="email" placeholder="email" required />
            <input
              type="text"
              name="name"
              placeholder="Phone Number"
              required
            />
            <textarea
              name="message"
              placeholder="Write a message..."
              required
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div className={styles.right}>
          <div className={styles.myDetails}>
            <p>You can contact me here :</p>
            <div>
              <div className={styles.title}><img src={emailimg} alt="email-id" /><h3>E-mail: </h3></div>
              <hr />
              <a href="mailto:kapilbadgujjar99@gmail.com">
                <p>kapilbadgujjar99@gmail.com</p>
              </a>
            </div>
            <div>
            <div className={styles.title}><img src={phoneimg} alt="phone-number" /><h3>Phone:</h3></div>
              <hr />
              <a href="tel: +91 7988220911">
                <p>+91 7988220911</p>
              </a>
            </div>
            <div>
            <div className={styles.title}><img src={addressimg} alt="address" /><h3>Address: </h3></div>
              <hr />
              <p>Jhajjar &#40;124103&#41;, Haryana, India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
