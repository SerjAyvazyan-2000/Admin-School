import React, {useState} from "react";
import "./style.scss"
import "../../assets/style/flex.scss"
import "../../assets/style/icoon/style.css"


const Header = () => {


    const handleClick = () => {


    }

    return<header className="header-block G-container">
        <div className="main-title ">
            <div className="main-content">
                <div className="menu-burger G-center-flex-direction">
                    <div className="burger"></div>
                    <div className="burger"></div>
                    <div className="burger"></div>
                </div>
                <div className="p-search  G-center-flex-direction">
                    <span className="icon-search"></span>
                </div>
            </div>

            <div className="log-out">
              <button onClick={handleClick}>Logout</button>
            </div>

        </div>

        </header>

}
export default Header