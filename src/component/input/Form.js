import React, { useState } from "react";
import styles from "./Form.module.css";

function Form(props) {
  const [inputData, setInputData] = useState({
    currentSaving: 0,
    yearlyContribution: 0,
    expectedReturn: 0,
    duration: 0,
  });

  function savingOnClickHandler(event) {
    setInputData((prevState) => {
      return { ...prevState, currentSaving: event.target.value };
    });
  }

  function yearlyOnClickHandler(event) {
    setInputData((prevState) => {
      return { ...prevState, yearlyContribution: event.target.value };
    });
  }

  function expectedOnClickHandler(event) {
    setInputData((prevState) => {
      return { ...prevState, expectedReturn: event.target.value };
    });
  }

  function durationOnClickHandler(event) {
    setInputData((prevState) => {
      return { ...prevState, duration: event.target.value };
    });
  }

  function resetOnClickHandler() {
    setInputData((prevState) => {
      return {
        currentSaving: 0,
        yearlyContribution: 0,
        expectedReturn: 0,
        duration: 0,
      };
    });
    props.submitFunction([]);
  }
  function submitOnClickHandler(event) {
    event.preventDefault();
    props.submitFunction(inputData);
  }
  return (
    <form className={styles.form} onSubmit={submitOnClickHandler}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            onChange={savingOnClickHandler}
            value={inputData.currentSaving}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={yearlyOnClickHandler}
            value={inputData.yearlyContribution}
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onChange={expectedOnClickHandler}
            value={inputData.expectedReturn}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            onChange={durationOnClickHandler}
            value={inputData.duration}
          />
        </p>
      </div>
      <p className={styles["actions"]}>
        <button
          type="reset"
          className={styles["buttonAlt"]}
          onClick={resetOnClickHandler}
        >
          Reset
        </button>
        <button type="submit" className={styles["button"]}>
          Calculate
        </button>
      </p>
    </form>
  );
}

export default Form;
