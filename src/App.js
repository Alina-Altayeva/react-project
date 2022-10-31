import './style/style.css';
import React from 'react';
import Header from './components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Overlay from './components/overlay';
import Center from './components/center';
import Preguntas from './components/preguntas';
import MainForm from './components/form';
import Footer from './components/footer';
import OverlayTop from './components/overlaytop';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Overlay />
      <Center />
      <Preguntas />
      <OverlayTop />
      <MainForm></MainForm>
      <Footer />
    </div>
  );
}

export default App;
