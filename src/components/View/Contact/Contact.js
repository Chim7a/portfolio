import React from 'react';
import * as ImIcons from 'react-icons/im';
import * as MdIcons from 'react-icons/md';
import * as TiIcons from 'react-icons/ti';
import * as FiIcons from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact" id='contacts'>
        <h4 className="text-3xl font-bold text-center mb-10 text-rose-600">CONTACT</h4>
      <div className="contact__container grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 " id="contact">

      {/* Address info section */}
        <div className="contact__info grid-cols-5">
        <div className="icons__container">
        <span className="icons text-rose-700"><ImIcons.ImLocation /></span>
        </div>
        <div className="info__details">
          <h4 className="text-2xl font-bold text-neutral-300">My Address</h4>
          <p>United Kingdom</p>
        </div>
        </div>


      {/* Social info section */}
        <div className="contact__info">
        <div className="icons__container">
        <span className="icons text-rose-700"><MdIcons.MdSocialDistance /></span>
        </div>
        <div className="info__details">
          <h4 className="text-2xl font-bold text-neutral-300">Social Profiles</h4>
          <div className="social__icon text-neutral-400">
            <><TiIcons.TiSocialTwitter /></>
            <><TiIcons.TiSocialFacebookCircular /> </>
            <><TiIcons.TiSocialGithubCircular /> </>
          </div>
        </div>
        </div>


      {/* Email info section */}
        <div className="contact__info">
        <div className="icons__container">
        <span className="icons text-rose-700"><MdIcons.MdEmail /></span>
        </div>
        <div className="info__details">
          <h4 className="text-2xl font-bold text-neutral-300">Email Me</h4>
          <a className="email__text" href="mailto:chimalawrence11@gmail.com" alt="email-link">chimalawrence11@gmail.com</a>
        </div>
        </div>


      {/* Email info section */}
        <div className="contact__info">
        <div className="icons__container">
        <span className="icons text-rose-700"><FiIcons.FiPhoneCall /></span>
        </div>
        <div className="info__details">
          <h4 className="text-2xl font-bold text-neutral-300">Call Me</h4>
          <p>+44 7831 302489</p>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Contact;