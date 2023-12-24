import React from "react";
import styles from "./ContactMe.module.scss";
import emailimg from '/email.png';
import phoneimg from '/phone.png';
import addressimg from '/address.png';
import reactimg from '/ReactJS.png';
import githubimg from '/github-colored.png';
import sass from '/sass.png';
import love from '/love.png';
export default function ContactMe() {
  return (
    <div className={styles.ContactMe}>
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
            <div className={styles.up}>
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
            <div className={styles.down}>
              <h1>Made with <img src={love} alt='Love' /> by Kapil Badgujjar</h1>
              <h3>Technologies used <img src={reactimg} alt='REACTJS' /> <img src={sass} alt='SASS' /></h3>
              <a href="https://github.com/Kapil-Badgujjar/Portfolio-website"><p>Source Code: <img src={githubimg} alt="github"/></p></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
