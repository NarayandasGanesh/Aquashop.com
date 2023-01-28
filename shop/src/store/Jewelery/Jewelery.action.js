import axios from 'axios'
import * as types from './Jewelery.actionTypes'

export const Get_Jewelery_item=()=>async(dispatch)=>{

    dispatch({type:types.GET_Jewelery_LOADING})
    try {
           let respnce=await axios.get(`https://next-backend-orpin.vercel.app/Jewelery`)
           dispatch({type:types.GET_Jewelery_SUCCESS,payload:respnce.data})
    } catch (error) {
        dispatch({type:types.GET_Jewelery_ERROR})

        
    }
    
}

export const ADD_Jewelery_item=(cred)=>async(dispatch)=>{

    dispatch({type:types.ADD_Jewelery_LOADING})
    try {
        let res=await axios.post('https://next-backend-orpin.vercel.app/Jewelery',cred)
        console.log(res.data)
        dispatch({type:types.ADD_JeweleryT_SUCCESS,payload:res.data})
        
    } catch (error) {
        dispatch({type:types.ADD_Jewelery_ERROR})        
    }

}

export const UPDATE_Jewelery_item=(id,chenge)=>async(dispatch)=>{

     dispatch({type:types.UPDATE_Jewelery_LOADING})
    try {
        let res=await axios.patch( `https://next-backend-orpin.vercel.app/Jewelery/${id}`,chenge)
        console.log(res.data)
        dispatch({type:types.UPDATE_Jewelery_SUCCESS,payload:res.data})
        
    } catch (error) {
        dispatch({type:types.UPDATE_Jewelery_ERROR})        
    }

}

export const REMOVE_Jewelery_item=(id)=>async(dispatch)=>{
    console.log(id)
    dispatch({type:types.REMOVE_Jewelery_LOADING})
    try {
        let res=await axios.delete( `https://next-backend-orpin.vercel.app/Jewelery/${id}`)
        console.log(res.data)
        dispatch({type:types.REMOVE_Jewelery_SUCCESS,payload:id})
        
    } catch (error) {
        dispatch({type:types.REMOVE_Jewelery_ERROR})        
    }

    
}
export const sortMyJewelery = (how) => (dispatch) => {
    dispatch({ type: types.SORT_JEWELERY, payload: how });
  };