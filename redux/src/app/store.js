import { configureStore } from '@reduxjs/toolkit'

import CartSlice from '../features/Cart/CartSlice'
import ChangeSlice from '../features/ChangeNumber/ChangeSlice'

export default configureStore({
  reducer: {
	  cart:CartSlice,
	  change:ChangeSlice
  },
})