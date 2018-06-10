import { createStore } from 'redux';

//Action Generators 

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {} ) => ({
    type: 'DECREMENT',
    decrementBy
})

const resetCount = () => ({
    type: 'RESET'
})

const setCount = ({count = 1} = {}) => ({
    type: 'SET',
    count
})

//Reucers 
// 1. Reducers are pure functions, the output is only determined by the input. Don't use anything outside of the function. Don't change anything outside of the function scope 
// 2. Never state or action. Do not mutate the state, just redefine a new object like below

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
          return {
              count: state.count + action.incrementBy
          };
        case 'DECREMENT': 
          return {
              count: state.count - action.decrementBy
          };
        case 'RESET':
          return {
              count: 0
          };
        case 'SET':
          return {
              count: action.count
          }
        default:
          return state;  
    }
};

const store = createStore(countReducer)

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 10 }))

store.dispatch(incrementCount())

store.dispatch(decrementCount({ decrementBy: 15 }));

store.dispatch(decrementCount());

store.dispatch(resetCount());

store.dispatch(setCount({ count: 1000 }));

//Type HAS to be provided when calling dispatch