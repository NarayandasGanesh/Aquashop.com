import axios from 'axios'
import * as types from './Cosmetics.actionTypes'

export const Get_Cosmetics_item=()=>async(dispatch)=>{

    dispatch({type:types.GET_Cosmetics_LOADING})
    try {
           let respnce=await axios.get(`https://next-backend-orpin.vercel.app/Cosmetics`)
           dispatch({type:types.GET_Cosmetics_SUCCESS,payload:respnce.data})
    } catch (error) {
        dispatch({type:types.GET_Cosmetics_ERROR})

        
    }
    
}

export const ADD_Cosmetics_item=(cred)=>async(dispatch)=>{

    dispatch({type:types.ADD_Cosmetics_LOADING})
    try {
        let res=await axios.post('https://next-backend-orpin.vercel.app/Cosmetics',cred)
        console.log(res.data)
        dispatch({type:types.ADD_CosmeticsT_SUCCESS,payload:res.data})
        
    } catch (error) {
        dispatch({type:types.ADD_Cosmetics_ERROR})        
    }

}

export const UPDATE_Cosmetics_item=(id,chenge)=>async(dispatch)=>{

     dispatch({type:types.UPDATE_Cosmetics_LOADING})
    try {
        let res=await axios.patch( `https://next-backend-orpin.vercel.app/Cosmetics/${id}`,chenge)
        console.log(res.data)
        dispatch({type:types.UPDATE_Cosmetics_SUCCESS,payload:res.data})
        
    } catch (error) {
        dispatch({type:types.UPDATE_Cosmetics_ERROR})        
    }

}

export const REMOVE_Cosmetics_item=(id)=>async(dispatch)=>{
    console.log(id)
    dispatch({type:types.REMOVE_Cosmetics_LOADING})
    try {
        let res=await axios.delete( `https://next-backend-orpin.vercel.app/Cosmetics/${id}`)
        console.log(res.data)
        dispatch({type:types.REMOVE_Cosmetics_SUCCESS,payload:id})
        
    } catch (error) {
        dispatch({type:types.REMOVE_Cosmetics_ERROR})        
    }

    
}