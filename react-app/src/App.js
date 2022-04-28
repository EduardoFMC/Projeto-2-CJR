import React from 'react';
import './index.css';
import Header from './components/header.jsx';
import Footer from './components/footer';
import Tabela from './components/table';
import NavFirst from './components/nav-header';

export default function App () {
    return (
      <>
        <Header/>
        <NavFirst/>
        <Tabela/>
        <Footer/>
      </>
      
    );
}
