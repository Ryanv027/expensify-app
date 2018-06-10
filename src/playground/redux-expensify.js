import { createStore, combineReducers } from 'redux';
import uuid from 'uuid'

//Action generators 
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0} = {})  => (
    {
    type: 'ADD_EXPENSE',
    expense: {
      id: uuid(),
      description,
      note,
      amount,
      createdAt
    }
});

const removeExpense = ({id = ''} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

const sortByAmount = () => ({
    type: 'SET_BY_AMOUNT'
})

const sortByDate = () => ({
    type: 'SET_BY_DATE'
})

const setStartDate = (date) => ({
    type: 'SET_START_DATE',
    date
})

const setEndDate = (date) => ({
    type: 'SET_END_DATE',
    date
})

//Expenses Reducer 
const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
          return [
              ...state,
              action.expense
          ];
        case 'REMOVE_EXPENSE':
          return state.filter(({id}) => id !== action.id);
        case 'EDIT_EXPENSE':
          return state.map(expense => {
              if(expense.id === action.id){
                  return {
                      ...expense,
                      ...action.updates
                  }
              } else {
                  return expense 
              }
          })
        default: 
            return state;
    }
};

//Filters Reducer 
const filtersReducerDefaultState = { 
    text: '', sortBy: 'date', startDate: undefined, endDate: undefined
}; 

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER':
          return {
              ...state,
              text: action.text
          }
        case 'SET_BY_AMOUNT':
          return {
              ...state,
              sortBy: 'amount'
          }  
        case 'SET_BY_DATE':
          return {
              ...state,
              sortBy: 'date'
          }
        case 'SET_START_DATE':
          return {
              ...state,
              startDate: action.date
          }  
          case 'SET_END_DATE':
          return {
              ...state,
              endDate: action.date
          }    
        default: 
            return state;
    }
}

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate; 
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())
        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b)=> {
        switch(sortBy){
            case 'date':
              return a.createdAt < b.createdAt ? 1 : -1;
            case 'amount':
              return a.amount < b.amount ? 1 : -1
        }
    })

}

//Store Creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    //console.log(state)
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
})

store.dispatch(sortByAmount());

const expenseOne = store.dispatch(addExpense({description: 'Rent', note: 'Starbucks', amount: 800, createdAt: -21000}))

const expenseTwo = store.dispatch(addExpense({description: 'Food', note: 'McDonalds', amount: 995, createdAt: -311000}))

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 15000}));

// store.dispatch(sortByAmount());

// store.dispatch(sortByDate());


// store.dispatch(setEndDate(1250));

// store.dispatch(setStartDate());


// store.dispatch(setEndDate());


//TImestamps (milliseconds)
// January 1st 1970 is timestamp 0 (unix epoch)
// 33400
//Negative numbers go before Jan 1st 1970, positive after 