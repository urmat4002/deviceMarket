import {createSlice} from '@reduxjs/toolkit'

const initialState = {isAuth: false, shop: {types: [], brands: [], devices: []}}

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    setTypes: (state, action) => {
      state.shop.types = action.payload
    },
    setBrands: (state, action) => {
      state.shop.brands = action.payload
    },
    setDevice: (state, action) => {
      state.shop.devices = action.payload
    },
    setIsAuth: (state, action) => {
      state.isAuth = action.payload
    },
  },
})

export const {setTypes, setBrands, setDevice, setIsAuth} = shopSlice.actions

export const shopReducer = shopSlice.reducer
