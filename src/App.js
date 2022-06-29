import { useState, createContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
//Components
import { Name } from './components/Questions/Name';
import { Result } from './components/result/Result';
import './App.css';
import { VisitFrequency } from './components/Questions/VisitFrequency';

export const AppContext = createContext();

function App() {
  const [name, setName] = useState('');
  const [selectedVisitFrequency, setSelectedVisitFrequency] = useState('');
  const [visitFrequencyPoints, setVisitFrequencyPoints] = useState(0);

  return (
    <BrowserRouter>
      <AppContext.Provider
        value={{
          name,
          setName,
          selectedVisitFrequency,
          setSelectedVisitFrequency,
          visitFrequencyPoints,
          setVisitFrequencyPoints,
        }}
      >
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/name" element={<Name />} />
          <Route exact path="/visit-frequency" element={<VisitFrequency />} />
          <Route exact path="/result" element={<Result />} />
        </Routes>
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
