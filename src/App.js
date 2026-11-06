import './App.css';

//Нужно для переключения страничек
import { Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Map from './components/map/Map';
import Main from './components/main/Main';
import Bar from './components/bar/Bar';
import Section from './components/section/Section';
import Sectiontwo from './components/sectiontwo/Sectiontwo';
import BrandPages from './components/brandPages/BrandPages';



function App() {
  return (
    <div className="App">
      <Header/>

      <Routes>
        <Route path='/' element={
          <>
          <Main />
          <Bar />
          <Section />
          <Sectiontwo />
          </>
        }/>

        <Route path="/brand/:brandName" element={<BrandPages />} />
        <Route path="/map" element={<Map />} />
      </Routes>

    </div>
  );
}

export default App;
