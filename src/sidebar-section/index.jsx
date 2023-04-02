import React, {useEffect} from "react";
import "./style.scss"
import {NavLink} from "react-router-dom";
import schoolImag from "../assets/image/school.jpeg"
import "../assets/style/icoon/style.css"
import {useSelector} from "react-redux";


const Sidebar = () => {



    return   <div className="p-sidebar">
        <nav className="p-nav-block">
            <div className="admin-name">
                <h1>Dashboard</h1>
            </div>
            <div style={{backgroundImage:`url(${schoolImag})`}} className="dashboard-image"></div>
            <div className="sidebar-block">
                <ul>

                    <li>
                        <NavLink className="icon-home" to={"/school"}>School</NavLink>
                    </li>
                    <li>
                        <NavLink className="icon-user-tie" to={"/Teachers"}>Teachers</NavLink>
                    </li>

                    <li>
                        <NavLink className="icon-user" to={"/Children"}>Children</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/lessons"}>Lessons</NavLink>
                    </li>

                       <li>
                        <NavLink to={"/login"}>Login</NavLink>
                    </li>

                    <li>
                        <NavLink to={"/register"}>Register</NavLink>
                    </li>

                </ul>
            </div>
        </nav>
    </div>
}
export default Sidebar