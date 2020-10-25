import React from "react";
import PropTypes from "prop-types";
import { Container, Table } from "react-bootstrap";

import Cell from "./Cell/Cell";
import labels from "../../../utils/labels";
import styles from "./Table.module.css";

export default (props) => {
  const getHead = () => {
    return (
      <tr>
        <th></th>
        {Object.values(labels).map((label) => (
          <th key={label}>{label.toUpperCase()}</th>
        ))}
      </tr>
    );
  };

  const getBody = () => {
    return (
      <>
        {Object.keys(labels).map((index) => {
          return (
            <tr key={index}>
              <th>{index}</th>
              {Object.values(labels).map((label) => (
                <th key={`${label} ${index}`} className={styles.CellContainer}>
                  <Cell label={`${label}${index}`} />
                </th>
              ))}
            </tr>
          );
        })}
      </>
    );
  };

  return (
    <Container onClick={getHead}>
      <Table bordered>
        <thead>{getHead()}</thead>
        <tbody>{getBody()}</tbody>
      </Table>
    </Container>
  );
};
