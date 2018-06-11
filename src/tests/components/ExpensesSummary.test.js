import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from './../../components/ExpensesSummary';
import getSelectedExpenses from './../../selectors/expenses-total';
import expenses from './../fixtures/expenses';

test('should render ExpensesSummary correctly with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary />);
  wrapper.setProps({
    expenseCount: 2,
    expensesTotal: getSelectedExpenses([expenses[0], expenses[1]])
  });
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary correctly a single expense', () => {
  const wrapper = shallow(<ExpensesSummary />);
  wrapper.setProps({
    expenseCount: 1,
    expensesTotal: getSelectedExpenses([expenses[1]])
  });
  expect(wrapper).toMatchSnapshot();
});