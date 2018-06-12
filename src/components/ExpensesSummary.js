import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import getSelectedExpenses from './../selectors/expenses-total';
import selectExpenses from './../selectors/expenses';

export const ExpensesSummary = (props) => {
  const expenseWord = props.expenseCount === 1 ? 'expense' : 'expenses';
  const formattedExpensesTotal = numeral(props.expensesTotal / 100).format('$0,0.00')
  return (
    <div>
      <p>{`Viewing ${props.expenseCount} ${expenseWord} totalling ${formattedExpensesTotal}`}</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  expenseCount: selectExpenses(state.expenses, state.filters).length,
  expensesTotal: getSelectedExpenses(selectExpenses(state.expenses, state.filters))
});

export default connect(mapStateToProps)(ExpensesSummary);