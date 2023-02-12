import React from "react"
import { Link } from "react-router-dom"
import "./MainFooter.css"
// import { BsFacebook } from "@react-icons/all-files/bs/BsFacebook"
import { FiInstagram } from "@react-icons/all-files/fi/FiInstagram"
import { AiOutlineTwitter } from "@react-icons/all-files/ai/AiOutlineTwitter"
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube"

import {IoLogoFacebook } from "@react-icons/all-files/io/IoLogoFacebook"


export const MainFooter = () => {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="footerinner">
        <div className="footer__info">
          <h3>Join IKEA Family</h3>
          <p>
          Enjoy guaranteed discounts, special previews, food offers and much more. Sign up today - it’s free and only takes a minute to join.
          </p>
          <Link to="/login" className="footer__infoLink">
            <button className="footer_btn">Join the club</button>
          </Link>
        </div>
        <div className="footer__info">
          <h3>IKEA Business Network</h3>
          <p>
          e membership program for business customers with exciting benefits and features. Join us for free and enjoy member discounts, quick-fix tips, online tutorials and a lo
          </p>
          <Link to="/login" className="footer__infoLink">
            <button className="footer_btn">Join now</button>
          </Link>
        </div>
       </div>
        <div className="footer__infoList">
          <ul>
            <li className="footer__infoLi">
              <h5>IKEA Family</h5>
              <div className="footer__infoLinks">
                <a>Log in</a>
                <a>join IKEA Family</a>
                <a>Member offers</a>
                <a>Workshop & Events</a>
              </div>
            </li>

            <li className="footer__infoLi">
              <h5 className="footer__infoListTitle"> Services</h5>
              <div className="footer__infoLinks">
                <a>Design your room</a>
                <a>Delivery service</a>
                <a>Installation Service</a>
                <a>Returns &amp; claims</a>
                <a>Delivery</a>
                <a>Measuring Service</a>
                <a>Kitchen Planning</a>
                <a>Customer Service</a>
                <a>Click & collect</a>
                <a>Personal shopper</a>
              </div>
            </li>

            <li className="footer__infoLi">
              <h5>Help</h5>
              <div className="footer__infoLinks">
                <a>How to Shop</a>
                <a>All stores</a>
                <a>Return policy</a>
                <a>FAQ's</a>
                <a>Size guide - Beds & mattressest</a>
                <a>Contact us</a>
                <a>Buying guides</a>
                <a>Gift card</a>
                <a>Gift card</a>
              </div>
            </li>

            <li className="footer__infoLi">
              <h5>About IKEA</h5>
              <div className="footer__infoLinks">
                <a>This is IKEA</a>
                <a>Working at IKEA</a>
                <a>Prices and price tags</a>
                <a>News Rooom</a>
                <a>IKEA Stores</a>
                <a>Sustainability</a>
                <a>IKEA Restaurant</a>
                <a>IKEA for Business</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__social">
        <div className="footer__links">
          <div className="footer__socialIcons">
          <IoLogoFacebook/>
          </div>

          <div className="footer__socialIcons">
          <FiInstagram/>
          </div>

          <div className="footer__socialIcons">
           <AiOutlineTwitter/>
          </div>

          <div className="footer__socialIcons">
            <FaYoutube/>
          </div>
        </div>

        <div className="footer__buttons">
          <button>
            <p className="button__name"> Change country</p>
          </button>
        </div>
      </div>
      <hr className="footer__line" />
      <div className="footer__bottom">
        <p>&copy; Inter IKEA Systems B.V. 2000-2022</p>
        <div className="footer__bottomTags">
          <a>Privacy policy</a>
          <a>Cookie policy</a>
          <a>Cookie settings</a>
          <a>Terms and conditions</a>
        </div>
      </div>
    </div>
  )
}
