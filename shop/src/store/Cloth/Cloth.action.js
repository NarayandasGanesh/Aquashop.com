import axios from 'axios'
import * as types from './Cloth.actionTypes'

export const Get_cloth_item=()=>async(dispatch)=>{

    dispatch({type:types.GET_Cloth_LOADING})
    try {
           let respnce=await axios.get(`https://next-backend-orpin.vercel.app/cloths`)
           dispatch({type:types.GET_Cloth_SUCCESS,payload:respnce.data})
    } catch (error) {
        dispatch({type:types.GET_Cloth_ERROR})

        
    }
    
}

export const ADD_Cloth_item=(cred)=>async(dispatch)=>{

    dispatch({type:types.ADD_Cloth_LOADING})
    try {
        let res=await axios.post('https://next-backend-orpin.vercel.app/cloths',cred)
        console.log(res.data)
        dispatch({type:types.ADD_ClothT_SUCCESS,payload:res.data})
        
    } catch (error) {
        dispatch({type:types.ADD_Cloth_ERROR})        
    }

}

export const UPDATE_Cloth_item=(id,chenge)=>async(dispatch)=>{

     dispatch({type:types.UPDATE_Cloth_LOADING})
    try {
        let res=await axios.patch( `https://next-backend-orpin.vercel.app/cloths/${id}`,chenge)
        console.log(res.data)
        dispatch({type:types.UPDATE_Cloth_SUCCESS,payload:res.data})
        
    } catch (error) {
        dispatch({type:types.UPDATE_ClothS_ERROR})        
    }

}

export const REMOVE_Cloth_item=(id)=>async(dispatch)=>{
    console.log(id)
    dispatch({type:types.REMOVE_Cloth_LOADING})
    try {
        let res=await axios.delete( `https://next-backend-orpin.vercel.app/cloths/${id}`)
        console.log(res.data)
        dispatch({type:types.REMOVE_Cloth_SUCCESS,payload:id})
        
    } catch (error) {
        dispatch({type:types.REMOVE_Cloth_ERROR})        
    }

    
}

// export const SORT_CLOTH_ITEM=(order)=>(dispatch)=>{
//     let data =

// }