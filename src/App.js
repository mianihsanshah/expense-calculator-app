import React from 'react';
import './App.css';
import Components from './components';
import {TransactionProvider} from './transContext';

function App() {
  return (
    <TransactionProvider>
      <Components />
    </TransactionProvider>
  );
}

export default App;