import React, {useEffect, useState} from "react";
import "./style.scss"
import {useDispatch, useSelector} from "react-redux";
import authorizationType from "../../../store/combineRedusers/reducers/type";

const AddTeachers = ({openClose,editTeacherData,editTeacherIndex}) => {
    const teachersList = useSelector(state => state.AddTeacher.teachersList)
    const dispatch = useDispatch()

    const [teachers , setTeachers] = useState({
        firstName:'',
        lastName:'',
        profession:'',
        phoneNumber:'',
        salary:'',
    })

    const [errorText , setErrorText] = useState({
        firstName:'',
        lastName:'',
        profession:'',
        phoneNumber:'',
        salary:'',
    })
    useEffect(()=>{
       if(editTeacherData){
           setTeachers(editTeacherData)
       }
    },[])


    const handleChenge = (e) => {
        setTeachers({...teachers,[e.target.name]:e.target.value})
    }
    const handleClick = () => {
        if (validation()){
            dispatch({type:authorizationType.SET_TEACHER_DATA,payload:teachers})
            setTeachers({...teachers,firstName:'',lastName: '',profession:'',phoneNumber: '',salary:'',experience:''})
        }


    }

    useEffect(()=>{
        localStorage.setItem("teachers",(JSON.stringify(teachersList)))
    },[teachersList])
    const validation = () => {
        let validate = true
        let errorString = {
            firstName:'',
            lastName:'',
            profession:'',
            phoneNumber:'',
            salary:'',

        }
        if(!teachers.firstName.trim().length){
            errorString.firstName = "Fill in The Required firstName"
            validate = false
        }

        if(!teachers.lastName.trim().length){
            errorString.lastName = "Fill in The Required lastName"
            validate = false
        }

        if(!teachers.profession.trim().length){
            errorString.profession = "Fill in The Required profession"
            validate = false

        }
        if(!teachers.phoneNumber.trim().length) {
            errorString.phoneNumber = " Fill in The Required phoneNumber"
            validate = false
        }

        if(!teachers.salary.trim().length){
            errorString.salary = "Fill in The Role Reference salary"
            validate = false

        }

        setTeachers(teachers)
        setErrorText(errorString)
        return validate
    }


    return <div className="teachers-modal-block">
     <div onClick={openClose} className="teachers-modal-bg"></div>
    <div className="teachers-modal-content">

        <div className="p-teachers-add">
            <div className="teachers-list">
                <h1>ADD Teachers</h1>
                <div className="teachers-add-tools">
                    <div className="input-name">
                        <span>FirstName</span>
                    </div>
                    <label>
                        <input value={teachers.firstName} onChange={handleChenge}   type="text" name="firstName" placeholder="Search firstName..."/>
                        <h3>{errorText.firstName}</h3>
                    </label>
                </div>

                <div className="teachers-add-tools">
                    <div className="input-name">
                        <span>LastName</span>
                    </div>
                    <label>
                        <input value={teachers.lastName} onChange={handleChenge}  type="text" name="lastName" placeholder="Search lastName..."/>
                        <h3>{errorText.lastName}</h3>
                    </label>
                </div>

                <div className="teachers-add-tools">
                    <div className="input-name">
                        <span>Profession</span>
                    </div>
                    <label>
                        <input value={teachers.profession} onChange={handleChenge}  type="text" name="profession" placeholder="Search profession..."/>
                        <h3>{errorText.profession}</h3>
                    </label>
                </div>

                <div className="teachers-add-tools">
                    <div className="input-name">
                        <span>PhoneNumber</span>
                    </div>
                    <label>
                        <input value={teachers.phoneNumber} onChange={handleChenge}  type="text" name="phoneNumber" placeholder="Search phoneNumber..."/>
                        <h3>{errorText.phoneNumber}</h3>
                    </label>
                </div>
                <div className="teachers-add-tools">
                    <div className="input-name">
                        <span>Salary</span>
                    </div>
                    <label>
                        <input value={teachers.salary} onChange={handleChenge}  type="text" name="salary" placeholder="Search salary..."/>
                        <h3>{errorText.salary}</h3>
                    </label>

                </div>

                <div className="submit">
                    <button onClick={handleClick}>Submit</button>
                    <button onClick={openClose} >Close</button>
                </div>
            </div>

        </div>
    </div>
    </div>

}
export default AddTeachers