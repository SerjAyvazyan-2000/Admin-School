import React, {useEffect, useState} from "react";
import "./style.scss"
import "../../assets/style/icoon/style.css"
import {useDispatch, useSelector} from "react-redux";
import AddTeachers from "./add-teachers";
import authorizationType from "../../store/combineRedusers/reducers/type";
import DeleteTeacher from "./delete-modal";
import {Link} from "react-router-dom";
import teacherImg from "../../assets/image/teacher.jpg"

const Teachers = () => {
    const dispatch = useDispatch()
    const [openModal,setOpenModal] = useState(false)
    const [openDeleteModal,setOpenDeleteModal] = useState(false)
    const [editTeacherData, setEditTeacherData] = useState(null)
    const [editTeacherIndex , setEditTeacherIndex] = useState(null)
    const teacherList = useSelector(state => state.AddTeacher.teachersList)


    useEffect(()=>{
         dispatch({type:authorizationType.CHECK_TEACHER_DATA})
    },[])

    const handleClick  = () =>{
        setOpenModal(!openModal)

    }
    const editTeachers = (item,index,e) =>{
         setEditTeacherData(item)
        setEditTeacherIndex(index)
        handleClick()
        e.preventDefault()

    }
    const deleteTeachers = (e) =>{
        setOpenDeleteModal(!openDeleteModal)
        e.stopPropagation()
        e.preventDefault()

    }

    return <div className="p-teachers-block ">
            <h1>Schools Teachers</h1>
            <div className="teachers-tools">
                <button onClick={handleClick} className="btn-add-teachers">
                    <span>ADD</span>
                    <div className="liquid"></div>
                </button>
           </div>

        <div className="teachers-information G-container">
        {teacherList.length?teacherList.map((item,index)=>{
            return <>
            <Link to={`/teacher-details/${index}`}  style={{backgroundImage:`url(${teacherImg})`}}  key={index} className="teachers-content">
                <div className="content-tools">
                    <span onClick={(e)=>editTeachers(item,index,e)} className="icon-pencil2"></span>
                    <span onClick={(e)=>deleteTeachers(e)}  className="icon-cross"></span>
                </div>


            </Link>
            </>
        }) :null}
        </div>
        {openModal?<AddTeachers editTeacherData = {editTeacherData} editTeacherIndex={editTeacherIndex}  openClose={handleClick}/> :null}
        {openDeleteModal?<DeleteTeacher  editTeacherIndex={editTeacherIndex}  openClose={deleteTeachers}/>:null}
    </div>

}
export default Teachers