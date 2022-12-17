import { upload } from "@testing-library/user-event/dist/upload";
import * as types from "./Jewelery.actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  Jewelery:[]
};

export const Jeweleryreducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_Jewelery_LOADING:{
      return {
        ...state,
        isLoading:true

      }
    } 
    case types.GET_Jewelery_SUCCESS:{
      return {
        ...state,
        isLoading:false,
        Jewelery:payload

      }
    }    
    case types.GET_Jewelery_ERROR:{
      return {
        ...state,
        isLoading:false,
        isError:true

      }
    } 
    case types.ADD_Jewelery_LOADING:{
      return {
        ...state,
        isLoading:true
        
      }
     } 

    
     case types.ADD_JeweleryT_SUCCESS:{
      return {
        ...state,
        isLoading:false,
        Jewelery:[...state.Jewelery,payload]


      }
     }
    
     case types.ADD_Jewelery_ERROR:{
      return {
        ...state,
        isLoading:false,
        isError:true



      }
     }
    
     case types.UPDATE_Jewelery_LOADING:{
      return {
        ...state,
        isLoading:true

      }
     }
    
     case types.UPDATE_Jewelery_SUCCESS:{

      let Updated=state.Jewelery.map((Jewelery)=>{
          if(Jewelery.id==payload.id){
           return {...Jewelery,payload}
          }
          return Jewelery
      })
      return {
        ...state,
        Jewelery:Updated


      }
     }
    
     case types.UPDATE_Jewelery_ERROR:{
      return {
        ...state,
        isLoading:false,
        isError:true


      }
     }
    
     case types.REMOVE_Jewelery_LOADING:{
      return {
        ...state,
        isLoading:true


      }
     }
    
     case types.REMOVE_Jewelery_SUCCESS:{
      let removed=state.Jewelery.filter((Jewelery)=>Jewelery.id!=payload)

      return {
        ...state,
        Jewelery:removed


      }
     }
     case types.REMOVE_Jewelery_ERROR:{
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