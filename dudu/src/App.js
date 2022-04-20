import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/header.jsx';
import Footer from './components/footer';
import Tabelar from './components/tabela';

export default function App () {
    return (
      <>
        <Header/>
        <Tabelar/>
        <Footer/>
      </>
      
    );
  }
