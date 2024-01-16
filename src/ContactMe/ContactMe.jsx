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
      <div className={styles.head}>
        <h1 className={styles.title}>Contact Me</h1>
      </div>
      <div className={styles.main}>
        <div className={styles.left}>
          <form
            // action="https://formsubmit.co/kapilbadgujjar99@gmail.com"
            method="POST"
          >
            <div>Get in touch</div>
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />
            <input type="email" name="email" placeholder="Email" required />
            <input
              type="text"
              name="name"
              placeholder="Phone Number"
              required
            />
            <textarea
              name="message"
              placeholder="Write a message..."
              rows="6"
              required
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div className={styles.right}>
          <div className={styles.up}>
            <p>You can contact me here :</p>
            <div>
              <p>E-mail: </p>
              <a href="mailto:kapilbadgujjar99@gmail.com">
                <p>kapilbadgujjar99@gmail.com</p>
              </a>
            </div>
            <div>
              <p>Phone:</p>
                <a href="tel: +91 7988220911">
                  <p>+91 7988220911</p>
                </a>
            </div>
            <div>
              <p>Address: </p>
              <p>Jhajjar &#40;124103&#41;, Haryana, India</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
          <div className={styles.down}>
            <h2>Made with <img src={love} alt='Love' /> by Kapil Badgujjar</h2>
          </div>
      </div>
    </div>
  );
}
