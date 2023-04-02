
import authorizationType from "./type";

const defaultState = {
    childrenList:[]
}

const AddChildren = (state = defaultState ,action) => {
    switch (action.type) {
        case authorizationType.SET_CHILDREN_DATA :
             return  {...state,childrenList: [...state.childrenList,action.payload]}

        case authorizationType.CHECK_CHILDREN_DATA :
            const localChildren = JSON.parse(localStorage.getItem("children-list"))
            if(localChildren){
                return {...state,childrenList: localChildren}
            }else {
                 return {...state,childrenList: []}
            }

        case  authorizationType.DELETE_CHILDREN_DATA :
            const arrayChildren = JSON.parse(localStorage.getItem("children-list"))
              const index = arrayChildren.indexOf(action.payload)
              if(index === -1){
                   arrayChildren.splice(index , 1)
              }
            localStorage.setItem("children-list",JSON.stringify(arrayChildren))
             return  {...state,childrenList: arrayChildren}

        default :
             return {...state}
    }
}
export default AddChildren