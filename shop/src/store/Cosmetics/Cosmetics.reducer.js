import { upload } from "@testing-library/user-event/dist/upload";
import * as types from "./Cosmetics.actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  Cosmetics:[]
};

export const Cosmeticsreducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_Cosmetics_LOADING:{
      return {
        ...state,
        isLoading:true

      }
    } 
    case types.GET_Cosmetics_SUCCESS:{
      return {
        ...state,
        isLoading:false,
        Cosmetics:payload

      }
    }    
    case types.GET_Cosmetics_ERROR:{
      return {
        ...state,
        isLoading:false,
        isError:true

      }
    } 
    case types.ADD_Cosmetics_LOADING:{
      return {
        ...state,
        isLoading:true
        
      }
     } 

    
     case types.ADD_CosmeticsT_SUCCESS:{
      return {
        ...state,
        isLoading:false,
        Cosmetics:[...state.Cosmetics,payload]


      }
     }
    
     case types.ADD_Cosmetics_ERROR:{
      return {
        ...state,
        isLoading:false,
        isError:true



      }
     }
    
     case types.UPDATE_Cosmetics_LOADING:{
      return {
        ...state,
        isLoading:true

      }
     }
    
     case types.UPDATE_Cosmetics_SUCCESS:{

      let Updated=state.Cosmetics.map((Cosmetics)=>{
          if(Cosmetics.id==payload.id){
           return {...Cosmetics,payload}
          }
          return Cosmetics
      })
      return {
        ...state,
        Cosmetics:Updated


      }
     }
    
     case types.UPDATE_Cosmetics_ERROR:{
      return {
        ...state,
        isLoading:false,
        isError:true


      }
     }
    
     case types.REMOVE_Cosmetics_LOADING:{
      return {
        ...state,
        isLoading:true


      }
     }
    
     case types.REMOVE_Cosmetics_SUCCESS:{
      let removed=state.Cosmetics.filter((Cosmetics)=>Cosmetics.id!=payload)

      return {
        ...state,
        Cosmetics:removed


      }
     }
     case types.REMOVE_Cosmetics_ERROR:{
      return {
        ...state,
        isLoading:false,
        isError:true

      }
     }
     
     case types.SORT_COSMETICS: {
      if (payload == "high") {
    
        let sorted = state.Cosmetics.sort(
          (a, b) => Number(a.price) - Number(b.price)
        );
    
        return { ...state, Cosmetics: [...sorted] };
      } else if (payload == "low") {
        let sorted = state.Cosmetics.sort(
          (a, b) => Number(b.price) - Number(a.price)
        );
        return { ...state, Cosmetics: [...sorted] };
      }
    }



    default:{
       return state;
    }
     
  }
};