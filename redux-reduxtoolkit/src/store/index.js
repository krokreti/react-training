import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = {
    counter: 0, 
    showCounter: true,
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state, action) {
            // com redux toolkit, podemos acessar e alterar diretamente o valor do state
            // internamente o toolkit entende esse codigo e clona esse state e sobrescreve o anterior e mantem todo o state q nao estamos editando
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        },
    }
});


const store = configureStore({
    // reducer: counterSlice.reducer
    reducer: {
        counter: counterSlice.reducer,
    }
});

export const counterActions = counterSlice.actions;

export default store;