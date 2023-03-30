import React, { useState } from 'react';
import Main from './views/Main';
import Detail from './components/Detail';
import Update from './components/Update';
import axios from 'axios';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Main />} default />
          <Route path="/products/:id" element={<Detail />} />
          <Route path="/products/edit/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
