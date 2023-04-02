import React, {useEffect, useState} from "react";
import "./style.scss"
import {Route, Routes} from "react-router-dom";
import School from "../pages/school";
import Teachers from "../pages/teachers";
import Children from "../pages/children";
import Header from "./header";
import Login from "../pages/login";
import Register from "../pages/registr";
import {useDispatch, useSelector} from "react-redux";
import "../assets/style/flex.scss"
import authorizationType from "../store/combineRedusers/reducers/type";
import SchoolDetails from "../pages/school-details";
import TeacherDetails from "../pages/teacher-details";
import ChildrenDetails from "../pages/children-details";
import Lessons from "../pages/lessons";


const ContainerAdmin = () => {
   const loginKey = useSelector(state => state.Register.loginKey)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch({type:authorizationType.GET_LOGIN_KEY})

     },[])

    return    <div className="container-admin ">
      <Header/>
        <div className="p-content-block ">
            {loginKey?
                <Routes>

                    <Route path={"/school"} element={<School/>}/>
                    <Route path={"/school-details/:id"} element={<SchoolDetails/>}/>

                    <Route path={"/Teachers"} element={<Teachers/>}/>
                     <Route path={"/teacher-details/:id"} element={<TeacherDetails/>}/>

                    <Route path={"/Children"} element={<Children/>}/>
                     <Route path={"/children-details/:id"} element={<ChildrenDetails/>}/>
                     <Route path={"/lessons"} element={<Lessons/>}/>
                </Routes>
 :

                <Routes>
                    <Route path={"/login"} element={<Login/>}/>
                    <Route path={"/register"} element={<Register/>}/>
                    <Route path={"*"} element={<Register/>}/>
                </Routes>
            }
        </div>
    </div>

}
export default ContainerAdmin