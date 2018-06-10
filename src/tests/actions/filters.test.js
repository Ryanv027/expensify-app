import moment from 'moment';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from './../../actions/filters';

test('should generate set start date action object', ()=> {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    date: moment(0)
  });
});

test('should generate set end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    date: moment(0)
  });
});

test('should generate the set text filter action object with passed in values', () => {
  const action = setTextFilter('test');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'test'
  });
});

test('should generate the set text filter action object with default values', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

test('should generate the sort by amount action object', () => {
  expect(sortByAmount()).toEqual({type: 'SET_BY_AMOUNT' });
});

test('should generate the sort by date action object', () => {
  expect(sortByDate()).toEqual({type: 'SET_BY_DATE',});
});