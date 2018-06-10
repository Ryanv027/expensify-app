import moment from 'moment';
import filtersReducer from './../../reducers/filters';

test('should set up default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT'});
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sortBy to maount', () => {
  const state = filtersReducer(undefined, { type: 'SET_BY_AMOUNT'} );
  expect(state.sortBy).toBe('amount')
});

test('should set sortBy to date', () => {
  const state = filtersReducer({
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }, { type: 'SET_BY_DATE'} );
  expect(state.sortBy).toBe('date')
});

test('should set text filter', () => {
  const text = 'This is my text filter';
  const action = {
    type: 'SET_TEXT_FILTER',
    text
  }
  const state = filtersReducer(undefined, action)
  expect(state.text).toBe('This is my text filter')
})

test('should set startDate filter', () => {
  const startDate = moment();
  const action = {
    type: 'SET_START_DATE',
    date: startDate
  }
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toBe(startDate);
});

test('should set endDate filter', () => {
  const endDate = moment();
  const action = {
    type: 'SET_END_DATE',
    date: endDate
  }
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toBe(endDate);
});