import * as types from './actionType'  // import all actionType as types
import axios from 'axios'



const getdata=(users)=>({
    type:types.GET_USER,
    payload:users
})


export const getuserdata=()=>{
    return function(dispatch){
        axios.get(`http://localhost:3000/users`)
        .then((resp)=>{   
            dispatch(getdata(resp.data))
            console.log(resp.data);    
        })
    }
}

export const add_data=(data)=>{
    return function(dispatch){
        axios.post(`http://localhost:3000/users`,data)
        .then((resp)=>{
        })
        .catch(error=>console.log(error))
    }
}

export const delete_data=(id)=>{
    return function(dispatch){
        axios.delete(`http://localhost:3000/users/${id}`)
        .then((resp)=>{
        })
        .catch(error=>console.log(error))
    }
}


const getupdatedata=(user)=>({
    type:types.GET_SINGLE_USER,
    payload:user
})

export const get_single_data=(id)=>{
    return function(dispatch){
        axios.get(`http://localhost:3000/users/${id}`)
        .then((resp)=>{   
            dispatch(getupdatedata(resp.data))
            //console.log(resp.data);    
        })
    }
}


export const update_data=(id,formvalue)=>{
    return function(dispatch){
        axios.patch(`http://localhost:3000/users/${id}`,formvalue)
        .then((resp)=>{   
        })
    }
}
