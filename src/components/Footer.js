import React from "react";
import faceBook from "../images/icon-facebook.svg"
import instagram from "../images/icon-instagram.svg"
import twitter from "../images/icon-twitter.svg"

function Footer() {
    return (
        <div>
            <img src={faceBook} />
        <img src={instagram} />
            <img src={twitter} />
        </div>
    )
}

export default Footer;