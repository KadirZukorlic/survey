import { useState, createContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
//Components
import { Name } from './components/Questions/Name';
import { Result } from './components/result/Result';
import { VisitFrequency } from './components/Questions/VisitFrequency';
import { Options } from './components/Questions/Options';
import { Country } from './components/Questions/Contry';

import { MainLayout } from './layout/MainLayout';

export const AppContext = createContext();

function App() {
  const [name, setName] = useState('');
  const [selectedVisitFrequency, setSelectedVisitFrequency] = useState('');
  const [optionsPoints, setOptionsPoints] = useState(0);
  const [visitFrequencyPoints, setVisitFrequencyPoints] = useState(0);
  const [countryPoints, setCountryPoints] = useState(0);

  return (
    <MainLayout>
      <BrowserRouter>
        <AppContext.Provider
          value={{
            name,
            setName,
            selectedVisitFrequency,
            setSelectedVisitFrequency,
            visitFrequencyPoints,
            setVisitFrequencyPoints,
            optionsPoints,
            setOptionsPoints,
            countryPoints,
            setCountryPoints,
          }}
        >
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/name" element={<Name />} />
            <Route exact path="/visit-frequency" element={<VisitFrequency />} />
            <Route exact path="/options" element={<Options />} />
            <Route exact path="/country" element={<Country />} />
            <Route exact path="/result" element={<Result />} />
          </Routes>
        </AppContext.Provider>
      </BrowserRouter>
    </MainLayout>
  );
}

export default App;
