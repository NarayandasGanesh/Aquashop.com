import { upload } from "@testing-library/user-event/dist/upload";
import * as types from "./Cloth.actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  cloth:[]
};

export const Clothreducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_Cloth_LOADING:{
      return {
        ...state,
        isLoading:true

      }
    } 
    case types.GET_Cloth_SUCCESS:{
      return {
        ...state,
        isLoading:false,
        cloth:payload

      }
    }    
    case types.GET_Cloth_ERROR:{
      return {
        ...state,
        isLoading:false,
        isError:true

      }
    } 
    case types.ADD_Cloth_LOADING:{
      return {
        ...state,
        isLoading:true
        
      }
     } 

    
     case types.ADD_ClothT_SUCCESS:{
      return {
        ...state,
        isLoading:false,
        cloth:[...state.cloth,payload]


      }
     }
    
     case types.ADD_Cloth_ERROR:{
      return {
        ...state,
        isLoading:false,
        isError:true



      }
     }
    
     case types.UPDATE_Cloth_LOADING:{
      return {
        ...state,
        isLoading:true

      }
     }
    
     case types.UPDATE_Cloth_SUCCESS:{

      let Updated=state.cloth.map((cloth)=>{
          if(cloth.id==payload.id){
           return {...cloth,payload}
          }
          return cloth
      })
      return {
        ...state,
        cloth:Updated


      }
     }
    
     case types.UPDATE_ClothS_ERROR:{
      return {
        ...state,
        isLoading:false,
        isError:true


      }
     }
    
     case types.REMOVE_Cloth_LOADING:{
      return {
        ...state,
        isLoading:true


      }
     }
    
     case types.REMOVE_Cloth_SUCCESS:{
      let removed=state.cloth.filter((cloth)=>cloth.id!=payload)

      return {
        ...state,
        cloth:removed


      }
     }
     case types.REMOVE_Cloth_ERROR:{
      return {
        ...state,
        isLoading:false,
        isError:true

      }
     }




    //  case types.SORT_CLOTHES: {
    //   if (payload == "high") {
    
    //     let sorted = state.cloth.sort(
    //       (a, b) => Number(a.price) - Number(b.price)
    //     );
    
    //     return { ...state, cloth: [...sorted] };
    //   } else if (payload == "low") {
    //     let sorted = state.cloth.sort(
    //       (a, b) => Number(b.price) - Number(a.price)
    //     );
    //     return { ...state, cloth: [...sorted] };
    //   }
    // }



    default:{
       return state;
    }
     
  }
};