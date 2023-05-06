import { createSlice } from '@reduxjs/toolkit'

export const ChangeSlice = createSlice({
  name: 'change',

  initialState: {
    number: 10,
    name:"Raj Nagar",
  },
  reducers: {
    changename: (state) => {
      state.number+=10
    }
  },
})

export const { changename } = ChangeSlice.actions

export default ChangeSlice.reducer