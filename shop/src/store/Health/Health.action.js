import axios from 'axios'
import * as types from './Health.actionTypes'

export const Get_Health_item=()=>async(dispatch)=>{

    dispatch({type:types.GET_Health_LOADING})
    try {
           let respnce=await axios.get(`https://shop-api-lp09.onrender.com/health`)
           dispatch({type:types.GET_Health_SUCCESS,payload:respnce.data})
    } catch (error) {
        dispatch({type:types.GET_Health_ERROR})

        
    }
    
}

export const ADD_Health_item=(cred)=>async(dispatch)=>{

    dispatch({type:types.ADD_Health_LOADING})
    try {
        let res=await axios.post('https://shop-api-lp09.onrender.com/health',cred)
        console.log(res.data)
        dispatch({type:types.ADD_Health_SUCCESS,payload:res.data})
        
    } catch (error) {
        dispatch({type:types.ADD_Health_ERROR})        
    }

}

export const UPDATE_Health_item=(id,chenge)=>async(dispatch)=>{

     dispatch({type:types.UPDATE_Health_LOADING})
    try {
        let res=await axios.patch( `https://shop-api-lp09.onrender.com/health/${id}`,chenge)
        console.log(res.data)
        dispatch({type:types.UPDATE_Health_SUCCESS,payload:res.data})
        
    } catch (error) {
        dispatch({type:types.UPDATE_Health_ERROR})        
    }

}

export const REMOVE_Health_item=(id)=>async(dispatch)=>{
    console.log(id)
    dispatch({type:types.REMOVE_Health_LOADING})
    try {
        let res=await axios.delete( `https://shop-api-lp09.onrender.com/health/${id}`)
        console.log(res.data)
        dispatch({type:types.REMOVE_Health_SUCCESS,payload:id})
        
    } catch (error) {
        dispatch({type:types.REMOVE_Health_ERROR})        
    }

    
}