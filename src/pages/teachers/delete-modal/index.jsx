import React from "react";
import "./style.scss"
import {useDispatch, useSelector} from "react-redux";
import authorizationType from "../../../store/combineRedusers/reducers/type";

const DeleteTeacher = ({openClose,editTeacherIndex}) => {
    const dispatch = useDispatch()
    const teachersList = useSelector(state => state.AddTeacher.teachersList)

    const deleteTeacher = () => {
            dispatch({type:authorizationType.DELETE_TEACHER_DATA,payload:editTeacherIndex})
           openClose()
    }
    return<div className="modal-block">
        <div onClick={openClose}  className="modal-bg"></div>
        <div className="modal-content">
            <div className="delete-modal">
                <h1>Do you want Delete Teacher? </h1>
                <span  onClick={deleteTeacher}>Yes</span><span onClick={openClose} >No</span>
            </div>
        </div>
    </div>

}
export default DeleteTeacher