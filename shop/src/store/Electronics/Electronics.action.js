import axios from 'axios'
import * as types from './Electronics.actionTypes'

export const Get_Electronics_item=()=>async(dispatch)=>{

    dispatch({type:types.GET_Electronics_LOADING})
    try {
           let respnce=await axios.get(`https://next-backend-orpin.vercel.app/Electronics`)
           dispatch({type:types.GET_Electronics_SUCCESS,payload:respnce.data})
    } catch (error) {
        dispatch({type:types.GET_Electronics_ERROR})

        
    }
    
}

export const ADD_Electronics_item=(cred)=>async(dispatch)=>{

    dispatch({type:types.ADD_Electronics_LOADING})
    try {
        let res=await axios.post('https://next-backend-orpin.vercel.app/Electronics',cred)
        console.log(res.data)
        dispatch({type:types.ADD_ElectronicsT_SUCCESS,payload:res.data})
        
    } catch (error) {
        dispatch({type:types.ADD_Electronics_ERROR})        
    }

}

export const UPDATE_Electronics_item=(id,chenge)=>async(dispatch)=>{

     dispatch({type:types.UPDATE_Electronics_LOADING})
    try {
        let res=await axios.patch( `https://next-backend-orpin.vercel.app/Electronics/${id}`,chenge)
        console.log(res.data)
        dispatch({type:types.UPDATE_Electronics_SUCCESS,payload:res.data})
        
    } catch (error) {
        dispatch({type:types.UPDATE_Electronics_ERROR})        
    }

}

export const REMOVE_Electronics_item=(id)=>async(dispatch)=>{
    console.log(id)
    dispatch({type:types.REMOVE_Electronics_LOADING})
    try {
        let res=await axios.delete( `https://next-backend-orpin.vercel.app/Electronics/${id}`)
        console.log(res.data)
        dispatch({type:types.REMOVE_Electronics_SUCCESS,payload:id})
        
    } catch (error) {
        dispatch({type:types.REMOVE_Electronics_ERROR})        
    }

    
}
export const sortMyElectronics = (how) => (dispatch) => {
    dispatch({ type: types.SORT_ELECTRONICS, payload: how });
  };