import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
    counter: 0, 
    showCounter: true,
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
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

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;