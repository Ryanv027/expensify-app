import React from 'react';
import { connect } from 'react-redux';
import { startEditExpense, startRemoveExpense } from './../actions/expenses';
import ExpenseForm from './ExpenseForm';

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };
  onRemove = () => {
    const confirmation = confirm('Are you sure you want to delete this expense?');
    if(confirmation === true){
      const id = this.props.expense.id;
      this.props.startRemoveExpense(id);
      this.props.history.push('/');
    } else return false;
  };
  render(){
    return (
      <div>
        <div className='page-header'>
          <div className='content-container'>
            <h1 className='page-header__title'>Edit Expense</h1>
          </div>
        </div>
        <div className='content-container'>
          <ExpenseForm 
          onSubmit={this.onSubmit}
          expense={this.props.expense}
          />
          <button
            className='button button--remove'
            onClick={this.onRemove}
            >Remove Expense
          </button>
        </div>
      </div>
    )
  };
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);