import { upload } from "@testing-library/user-event/dist/upload";
import * as types from "./Health.actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  Health:[]
};

export const Healthreducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_Health_LOADING:{
      return {
        ...state,
        isLoading:true

      }
    } 
    case types.GET_Health_SUCCESS:{
      return {
        ...state,
        isLoading:false,
        Health:payload

      }
    }    
    case types.GET_Health_ERROR:{
      return {
        ...state,
        isLoading:false,
        isError:true

      }
    } 
    case types.ADD_Health_LOADING:{
      return {
        ...state,
        isLoading:true
        
      }
     } 

    
     case types.ADD_Health_SUCCESS:{
      return {
        ...state,
        isLoading:false,
        Health:[...state.Health,payload]


      }
     }
    
     case types.ADD_Health_ERROR:{
      return {
        ...state,
        isLoading:false,
        isError:true



      }
     }
    
     case types.UPDATE_Health_LOADING:{
      return {
        ...state,
        isLoading:true

      }
     }
    
     case types.UPDATE_Health_SUCCESS:{

      let Updated=state.Health.map((Health)=>{
          if(Health.id==payload.id){
           return {...Health,payload}
          }
          return Health
      })
      return {
        ...state,
        Health:Updated


      }
     }
    
     case types.UPDATE_Health_ERROR:{
      return {
        ...state,
        isLoading:false,
        isError:true


      }
     }
    
     case types.REMOVE_Health_LOADING:{
      return {
        ...state,
        isLoading:true


      }
     }
    
     case types.REMOVE_Health_SUCCESS:{
      let removed=state.Health.filter((Health)=>Health.id!=payload)

      return {
        ...state,
        Health:removed


      }
     }
     case types.REMOVE_Health_ERROR:{
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