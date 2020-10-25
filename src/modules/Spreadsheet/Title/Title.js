import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

import styles from "./Title.module.css";

const Title = (props) => {
  const titleData = useSelector(({ title }) => title);
  const { label, value, formula } = titleData;

  return (
    <Container fluid className={styles.Title}>
      <Row>
        <Col>
          <h3>Spreadsheet</h3>
        </Col>
      </Row>
      <Row>
        <Col>{`Label: ${label || ""}`}</Col>
        <Col>{`Formula: ${formula || ""}`}</Col>
        <Col>{`Value: ${value || ""}`}</Col>
      </Row>
    </Container>
  );
};

export default Title;
