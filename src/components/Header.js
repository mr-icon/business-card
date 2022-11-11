import React from "react"
import dp from "../images/dp.jpg"

function Header() {
    return (
        <header>
         <img src={dp} alt="" className="img" />
         <h2>Emmanuel Njoagwuani</h2>
         <h3>Software Engineer</h3>
         <p>Senior Developer</p>
        </header>
    )
}

export default Header;