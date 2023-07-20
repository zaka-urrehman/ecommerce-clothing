import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '@/redux/features/cartSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';



 export const store = configureStore({
  reducer: {
   allCart:cartReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;


export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

