import React, { Component } from 'react';
import Cart from '../../UI/cart/Cart';
import ExpensesChart from '../expenses_chart/ExpensesChart';
import ExpensesFilter from '../expenses_filter/ExpensesFilter';
import ExpensesList from '../expenses_list/ExpensesList';
import classes from './Expenses.module.css';

export default class Expenses extends Component {
  render() {
    return (
      <Cart className={classes.expenses}>
        <ExpensesChart />
        <ExpensesFilter />
        <ExpensesList />
      </Cart>
    );
  }
}
