import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/homepage/Homepage';
import Start from './Pages/Start/Start';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/start" element={<Start />} />
    </Routes>
  );
}

export default App;
