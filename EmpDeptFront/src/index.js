import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SelectAll from './SelectAll';
import SelectPart from './SelectPart';
import Insert from './Insert';
import Update from './Update';
import Delete from './Delete';

import DeptSelectAll from './DeptSelectAll';
import DeptSelectPart from './DeptSelectPart';
import DeptInsert from './DeptInsert';
import DeptUpdate from './DeptUpdate';
import DeptDelete from './DeptDelete';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <>
        <Route path="/" element={<App />}></Route>
        <Route path="/SelectAll" element={<SelectAll />}></Route>
        <Route path="/SelectPart" element={<SelectPart />}></Route>
        <Route path="/Insert" element={<Insert />}></Route>
        <Route path="/Update" element={<Update />}></Route>
        <Route path="/Delete" element={<Delete />}></Route>

        <Route path="/DeptSelectAll" element={<DeptSelectAll />}></Route>
        <Route path="/DeptSelectPart" element={<DeptSelectPart />}></Route>
        <Route path="/DeptInsert" element={<DeptInsert />}></Route>
        <Route path="/DeptUpdate" element={<DeptUpdate />}></Route>
        <Route path="/DeptDelete" element={<DeptDelete />}></Route>
      </>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
