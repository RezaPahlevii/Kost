import React from 'react'
import DaftarKost from '../components/DaftarKost';
import Footer from '../components/Footer';
import Header from '../components/Header';
// import Layout from './Layout';

const HomePage = () => {
  return (
    <div>
        <Header/>
        <DaftarKost/>
        <Footer/>
    </div>
  )
}

export default HomePage