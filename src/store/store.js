import {configureStore} from '@reduxjs/toolkit'
import {shopReducer} from './slice'

export const store = configureStore({reducer: {shop: shopReducer}})
