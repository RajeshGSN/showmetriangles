import React, { useState } from 'react';
import './App.css';
import { GridInputCard } from './GridInputCard';
import { gridProps, ResultGrid } from './ResultGrid';

function App() {
  const [gridInputs, setGridInputs] = useState({ rows: 6, columns: 12, cellSize: 100 } as gridProps);
  const updateGridInputsFromCard = (gridInputs: gridProps) => {
    setGridInputs(gridInputs);
  };
  return (
    <div className="App">
      <GridInputCard updateGridInputsFromCard={updateGridInputsFromCard} />
      <br></br>
      <ResultGrid {...gridInputs} />

    </div>
  );
}

export default App;
