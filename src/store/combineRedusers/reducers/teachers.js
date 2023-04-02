import authorizationType from "./type";

const defaultState = {
    teachersList:[]
}


const AddTeacher = (state = defaultState , action) => {
    switch (action.type) {
        case authorizationType.SET_TEACHER_DATA:
             return {...state,teachersList:[...state.teachersList,action.payload]}

        case authorizationType.CHECK_TEACHER_DATA:
             const localTeacherList =JSON.parse(localStorage.getItem("teachers"))
             if (localTeacherList){
                  return {...state,teachersList: localTeacherList}
             }else {
                 return {...state,teachersList: []}
             }

        case authorizationType.DELETE_TEACHER_DATA:
            const deleteTeacher = JSON.parse(localStorage.getItem("teachers"))
            const index = deleteTeacher.indexOf(action.payload)
            if(index === -1){
                deleteTeacher.splice(index , 1)
            }

            localStorage.setItem("teachers" ,JSON.stringify(deleteTeacher))

            return {...state,teachersList: deleteTeacher}

        default :
       return  {...state}
    }

}
export default AddTeacher