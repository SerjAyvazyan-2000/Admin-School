import React, {useEffect, useState} from "react";
import "./style.scss"
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import schoolImg  from  "../../assets/image/school.jpeg"


const SchoolDetails = () => {
    const schoolList = useSelector(state => state.AddSchool.schoolList)
    const teacherList = useSelector(state => state.AddTeacher.teachersList)
    const childrenList = useSelector(state => state.AddChildren.childrenList)

    const {id} = useParams()
    const [schoolDetails , setSchoolDetails] = useState({
        schoolName: '',
        address: '',
        directorName: '',
        directorPhoneNumber: '',
        directorEmailAddress: '',
        teachersMaxCount:0,
        childrenMaxCount:0,
        fond: 0,
    })

    useEffect(()=> {
            schoolList.forEach((element , index)=>{
                if(index === +id){
                    setSchoolDetails(element)
                }
            })
    },[])

    return<>
     <div className="table-school ">
         <h1>SCHOOL INFORMATION</h1>
            <table className="table-block">
                 <thead>
                    <th>schoolName</th>
                    <th>address</th>
                    <th>directorName</th>
                    <th>directorPhoneNumber</th>
                    <th>directorEmailAddress</th>
                    <th>teachersMaxCount</th>
                    <th>childrenMaxCount</th>
                    <th>fond</th>

                 </thead>
                <tbody >
                     <tr>
                          <td>{schoolDetails.schoolName}</td>
                          <td>{schoolDetails.address}</td>
                         <td>{schoolDetails.directorName}</td>
                         <td>{schoolDetails.directorPhoneNumber}</td>
                         <td>{schoolDetails.directorEmailAddress}</td>
                         <td>{teacherList.length}
                             <select >
                                 {teacherList.length?teacherList.map((item,index)=>{
                                 return <option value={index}>
                                     {item.firstName}
                                        </option>
                                 }) :null}
                             </select>
                         </td>
                         <td>{childrenList.length}

                             <select >
                                 {childrenList.length?teacherList.map((item,index)=>{
                                     return <option value={index}>
                                         {item.firstName}
                                     </option>
                                 }) :null}
                             </select>
                         </td>
                         <td>{schoolDetails.fond}</td>
                     </tr>

                </tbody>
            </table>
     </div>
  <div className="children-checkbox">
      <h1>CHILDREN</h1>
      {childrenList.length?childrenList.map((item,index)=>{
            return <>
            <input type="checkbox"/>
            <span>firstName:  {item.firstName} {index +1}</span>
          </>
      }) : null}
  </div>


    </>

}
export default SchoolDetails