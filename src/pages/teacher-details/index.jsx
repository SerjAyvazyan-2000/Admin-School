import React, {useEffect, useState} from "react";
import "./style.scss"
import {useSelector} from "react-redux";
import AddTeacher from "../../store/combineRedusers/reducers/teachers";
import {useParams} from "react-router-dom";

const TeacherDetails = () => {
    const teacherList = useSelector(state => state.AddTeacher.teachersList)
    const {id} = useParams()
    const [teacherDetails,setTeacherDetails] = useState({
        firstName:'',
        lastName:'',
        profession:'',
        phoneNumber:'',
        salary:'',
    })


    useEffect(()=>{
           teacherList.forEach((item,index)=>{
               if(index === +id){
                    setTeacherDetails(item)

               }
           })

    },[])


     return <div className="teacher-details">
               <h1>TEACHER INFORMATION</h1>
         <div className="teacher-box-information">
              <h2>FirstName:  <span>{teacherDetails.firstName}</span></h2>
             <h2>LastName:  <span>{teacherDetails.lastName}</span></h2>
             <h2>Profession:  <span>{teacherDetails.profession}</span></h2>
             <h2>PhoneNumber:  <span>{teacherDetails.phoneNumber}</span></h2>
             <h2>Salary:  <span>{teacherDetails.salary}</span></h2>
         </div>
     </div>
}

export default TeacherDetails