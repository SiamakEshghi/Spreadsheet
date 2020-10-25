import React from 'react';

import ErrorModal from './modules/ErrorModal/ErrorModal';
import Spreadsheet from './modules/Spreadsheet/Spreadsheet';
import './App.css';

function App() {
  return (
    <div className="App">
      <ErrorModal />
      <Spreadsheet />
    </div>
  );
}

export default App;
