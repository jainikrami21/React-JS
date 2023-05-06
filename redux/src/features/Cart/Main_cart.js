import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { increment, decrement } from './CartSlice'
import { changename } from '../ChangeNumber/ChangeSlice'

function Main_cart() {

  // useselector use for access state from store
  const value=useSelector((state)=>state.cart.value);
  const number=useSelector((state)=>state.change.number);
  const name=useSelector((state)=>state.change.name);

  // useDispatch use for access action from store
  const dispatch=useDispatch();

  return (
    <div>
      <button onClick={()=>dispatch(increment())}>+</button>
      <h1>{value}</h1>
      <button onClick={()=>dispatch(decrement())}>-</button>

      <hr />

      <button onClick={()=>dispatch(changename())}>Change Number</button>
      <h1>{number}</h1>
      <hr />
      <h1>{name}</h1>
    </div>



  )
}

export default Main_cart