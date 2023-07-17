import React from "react";
import styles from "./Output.module.css";

function Output(props) {
  if (props.items.length === 0) {
    return <div />;
  }
  return (
    <table className={styles.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.items.map((i) => {
          return (
            <tr key={i.year}>
              <td>{i.year}</td>
              <td>${i.savingsEndOfYear.toLocaleString(undefined, { maximumFractionDigits: 2 , minimumFractionDigits: 2})}</td>
              <td>${i.yearlyInterest.toLocaleString(undefined, { maximumFractionDigits: 2 , minimumFractionDigits: 2})}</td>
              <td>${i.totalIntestGained.toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 })}</td>
              <td>${i.totalInvestedMoney.toLocaleString(undefined, { maximumFractionDigits: 2 , minimumFractionDigits: 2})}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Output;
