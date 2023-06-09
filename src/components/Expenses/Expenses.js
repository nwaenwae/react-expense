import { useState } from "react";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onChangeFilter={filterChangeHandler}
          filteredYear={filteredYear}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList filteredExpenses={filteredExpenses}></ExpensesList>
      </Card>
    </div>
  );
};

export default Expenses;
