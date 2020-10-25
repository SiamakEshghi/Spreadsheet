import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

import Table from "./Table/Table";
import Title from "./Title/Title";
import styles from "./Spreadsheet.module.css";

export default (props) => {
  return (
    <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
      <Title />
      <Table />
    </Container>
  );
};
