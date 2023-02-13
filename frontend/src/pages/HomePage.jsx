import React from 'react'
import DaftarKost from '../components/DaftarKost';
import Footer from '../components/Footer';
import Header from '../components/Header';

import { Container } from '@mui/material';
import Banner from '../components/Banner';
// import Layout from './Layout';

const HomePage = () => {
  return (
    <><React.Fragment>
      <Header />
    <Container>
      {/* <Banner/> */}
      <DaftarKost />
    </Container>
      <Footer />  
    </React.Fragment></>
  )
}

export default HomePage