import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import getSelectedExpenses from './../selectors/expenses-total';
import selectExpenses from './../selectors/expenses';

export const ExpensesSummary = (props) => {
  return (
    <div>
      <p>{`Viewing ${props.expenseCount} expenses totalling ${numeral(props.expensesTotal / 100).format('$0,0.00')}`}</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  expenseCount: selectExpenses(state.expenses, state.filters).length,
  expensesTotal: getSelectedExpenses(selectExpenses(state.expenses, state.filters))
});

export default connect(mapStateToProps)(ExpensesSummary);