import axios from "axios";
import * as actionType from './AdminActionTypes';

import { BASE_URL } from "../../Util/Constant.js";

// Create [Add Product]=>
const addProduct=(payload)=>(dispatch)=>{
    dispatch({type:actionType.ADD_PRODUCTS_REQUEST});

    return axios.post(`${BASE_URL}/grocery/create`,payload
    ).then((res)=>{
        console.log(res.data)
        dispatch({
            
            type:actionType.ADD_PRODUCTS_SUCCESS, payload:res.data})
    }).catch((err)=> dispatch({type:actionType.ADD_PRODUCTS_FAILURE}))
}

// Get products =>
const getProducts=(cat,page)=>async(dispatch)=>{
    if(page===undefined) page=1
    if(cat===undefined) cat="Snacks & Branded foods"
    dispatch({type:actionType.GET_PRODUCTS_REQUEST});

    return await axios.get(`${BASE_URL}/grocery?limit=30&category=${cat}&page=${page}`).then((res)=>{
        dispatch({type:actionType.GET_PRODUCTS_SUCCESS, payload:res.data})
    }).catch((err)=>{
        dispatch({type:actionType.GET_PRODUCTS_FAILURE})
    })
}

// Update Product=>
const updateProduct = (id, payload)=>(dispatch)=>{
    dispatch({type: actionType.UPDATE_PRODUCTS_REQUEST});
    
    return axios.patch(`${BASE_URL}/grocery/${id}`,payload
    ).then(res=>{
        dispatch({type:actionType.UPDATE_PRODUCTS_SUCCESS, payload:res})
    }).catch((er)=>dispatch({type:actionType.UPDATE_PRODUCTS_FAILURE}))
}

// Delete Product=>
const deleteProduct=(id)=>(dispatch)=>{
    dispatch({type:actionType.DELETE_PRODUCTS_REQUEST})

    return axios.delete(`${BASE_URL}/grocery/${id}`
    ).then((res)=>{
        dispatch({type:actionType.DELETE_PRODUCTS_SUCCESS, payload:id})
    }).catch((err)=>dispatch({type:actionType.DELETE_PRODUCTS_FAILURE}));
}

export { addProduct, getProducts, updateProduct, deleteProduct };