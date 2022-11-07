import './style/style.css';
import './App.scss';
import React from 'react';
import Header from './components/header';
import Overlay from './components/overlay';
import Center from './components/center';
import Preguntas from './components/preguntas';
import MainForm from './components/form';
import Footer from './components/footer';
import OverlayTop from './components/overlaytop';
import $ from "jquery";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-hook-form';

function App() {
  $(document).ready(function(){}); 
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
