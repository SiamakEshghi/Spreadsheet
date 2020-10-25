import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";

import {
  setValue,
  setFormula,
  setTitle,
  setError,
  setActiveCell,
} from "../../../../store/actions";
import TooltipWrapper from "../../../sharedModules/TooltipWrapper/TooltipWrapper";
import { circulateValidator } from "./utils";
import styles from "./Cell.module.css";

const Cell = (props) => {
  const { label } = props;
  const data = useSelector(({ data }) => data);
  const activeCell = useSelector(({ activeCell }) => activeCell);
  const dispatch = useDispatch();
  const [formulaInput, setFormulaInput] = useState();

  const setTitleWithData = useCallback(() => {
    if (activeCell.label === label) {
      dispatch(setTitle(label, data[label]?.value, formulaInput));
    }
  }, [data, activeCell, formulaInput, label]);

  useEffect(() => {
    setTitleWithData();
  }, [formulaInput, activeCell]);

  const setValueHandler = (e) => {
    const value = Number(e.target.value);
    dispatch(setValue(label, value));
  };

  const cellOnclickHandler = () => {
    dispatch(setActiveCell(label));
    setTitleWithData();
  };

  const submitFormula = () => {
    const isFormulaVAlid = circulateValidator(label, formulaInput, data);
    if (!isFormulaVAlid) {
      return dispatch(setError("Can't have circulate in formula!"));
    }

    dispatch(setFormula(label, formulaInput));
  };

  const valueInputComponent = (
    <input
      className={styles.ValueInput}
      type="number"
      value={
        data[label]?.value || data[label]?.value === 0 ? data[label]?.value : ""
      }
      disabled={data[label]?.formula}
      onChange={setValueHandler}
    />
  );

  const formulaInputComponent = (
    <div className={styles.Formula}>
      <input
        className={styles.FormulaInput}
        value={formulaInput || ""}
        onChange={(e) => setFormulaInput(e.target.value)}
      />
      <button className={styles.FormulBtn} onClick={submitFormula}>
        send
      </button>
    </div>
  );

  return (
    <div className={styles.Cell} onClick={cellOnclickHandler}>
      {label === "a1" ? (
        <>
          <TooltipWrapper tooltipText="Enter value.(disabled if formula is set)">
            {valueInputComponent}
          </TooltipWrapper>
          <TooltipWrapper tooltipText="Enter Formula. (b1 * b2 + c1 / c2 - e7)">
            {formulaInputComponent}
          </TooltipWrapper>
        </>
      ) : (
        <>
          {valueInputComponent}
          {formulaInputComponent}
        </>
      )}
    </div>
  );
};

Cell.prototype = {
  label: PropTypes.string,
};

export default Cell;
