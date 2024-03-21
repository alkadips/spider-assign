import {Routes,Route } from 'react-router-dom';
import './App.css';
import Demo from './demo'
import Event from './event';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Demo/>}/>
      <Route path="/event" element={<Event/>}/>
    </Routes>
    </>
  );
}

export default App;
