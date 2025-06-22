import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        
        {/* Left Section */}
        <div className="footer-content-left">
          <img src={assets.logo} alt="Wow Bites Logo" />
          <p>
            Welcome to Wow Bites — your go-to destination for mouthwatering multi-cuisine delights.
            From sizzling pizzas and juicy burgers to crispy fried chicken, we serve a variety of global
            flavors to satisfy every craving. Experience quality, taste, and hospitality in every bite.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>

        {/* Center Section */}
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Wow Bites</li>
            <li>Menu</li>
            <li>Order Online</li>
            <li>Privacy Policy</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-content-right">
          <h2>CONTACT US</h2>
          <ul>
            <li>📞 +1-212-456-333</li>
            <li>✉️ support@wowbites.com</li>
            <li>📍 123 Foodie Street, New York, NY</li>
          </ul>

          {/* Newsletter */}
          <div className="footer-newsletter">
            <h3>Subscribe for Offers</h3>
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>

          {/* Payment Icons
          <div className="footer-payments">
            <img src={assets.visa_icon} alt="Visa" />
            <img src={assets.mastercard_icon} alt="Mastercard" />
            <img src={assets.paypal_icon} alt="PayPal" />
          </div> */}
        </div>

      </div>

      <hr />
      <p className="footer-copyright">
        © 2025 WowBites.com —By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2025 © WowBites™ Ltd. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
