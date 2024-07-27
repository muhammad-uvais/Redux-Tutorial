import {configureStore} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import cartData  from "./rootReducer";
import productsaga from './productSaga';

const saga = createSagaMiddleware()

const store = configureStore({
    reducer: cartData,
    middleware: () => [saga],
})
saga.run(productsaga)
export default store