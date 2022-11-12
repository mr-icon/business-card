import React from "react"
import dp from "../images/dp.jpg"

function Header() {
    return (
        <header className="title">
         <img src={dp} alt="" className="img" />
         <h2 className="title--h2">Emmanuel Njoagwuani</h2>
         <h3 className="title--h3">Software Engineer</h3>
         <p className="title--p">Senior Developer</p>
        </header>
    )
}

export default Header;