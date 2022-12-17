import { upload } from "@testing-library/user-event/dist/upload";
import * as types from "./Electronics.actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  Electronics:[]
};

export const Electronicsreducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_Electronics_LOADING:{
      return {
        ...state,
        isLoading:true

      }
    } 
    case types.GET_Electronics_SUCCESS:{
      return {
        ...state,
        isLoading:false,
        Electronics:payload

      }
    }    
    case types.GET_Electronics_ERROR:{
      return {
        ...state,
        isLoading:false,
        isError:true

      }
    } 
    case types.ADD_Electronics_LOADING:{
      return {
        ...state,
        isLoading:true
        
      }
     } 

    
     case types.ADD_ElectronicsT_SUCCESS:{
      return {
        ...state,
        isLoading:false,
        Electronics:[...state.Electronics,payload]


      }
     }
    
     case types.ADD_Electronics_ERROR:{
      return {
        ...state,
        isLoading:false,
        isError:true



      }
     }
    
     case types.UPDATE_Electronics_LOADING:{
      return {
        ...state,
        isLoading:true

      }
     }
    
     case types.UPDATE_Electronics_SUCCESS:{

      let Updated=state.Electronics.map((Electronics)=>{
          if(Electronics.id==payload.id){
           return {...Electronics,payload}
          }
          return Electronics
      })
      return {
        ...state,
        Electronics:Updated


      }
     }
    
     case types.UPDATE_Electronics_ERROR:{
      return {
        ...state,
        isLoading:false,
        isError:true


      }
     }
    
     case types.REMOVE_Electronics_LOADING:{
      return {
        ...state,
        isLoading:true


      }
     }
    
     case types.REMOVE_Electronics_SUCCESS:{
      let removed=state.Electronics.filter((Electronics)=>Electronics.id!=payload)

      return {
        ...state,
        Electronics:removed


      }
     }
     case types.REMOVE_Electronics_ERROR:{
      return {
        ...state,
        isLoading:false,
        isError:true

      }
     }



    default:{
       return state;
    }
     
  }
};