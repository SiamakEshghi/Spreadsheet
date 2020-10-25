import React from 'react';
import { Container } from 'react-bootstrap';

import SpreadsheetTable from './SpreadsheetTable/SpreadsheetTable';
import Title from './Title/Title';

export default (props) => {
  return (
    <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
      <Title />
      <SpreadsheetTable />
    </Container>
  );
};
