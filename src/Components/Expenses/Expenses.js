import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList'
import ExpenseChart from './ExpenseChart'
import "./Expense.css";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  const filterChangeHandler = (year) => {
    setFilteredYear(year);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onFilterChange={filterChangeHandler}
      />
      <ExpenseChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>
    </Card>
  );
};

export default Expenses;
