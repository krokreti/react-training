import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth-slice';
import counterReducer from './counter-slice';

const store = configureStore({
    // reducer: counterSlice.reducer
    reducer: {
        counter: counterReducer,
        auth: authReducer
    }
});

export default store;