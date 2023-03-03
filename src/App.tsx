import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/homepage/Homepage';
import Pokedex from './Pages/pokedex/Pokedex';
import Start from './Pages/Start/Start';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/start" element={<Start />} />
        <Route path="/pokedex" element={<Pokedex />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
