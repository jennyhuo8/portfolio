import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { Container } from './LayoutStyles';

export const metadata = {
  title: "Roe Handyman Services",
};

export const Layout = ({ children }) => {
  return (
    <Container>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>
      <Header />
      <main>{children}</main> 
      <Footer />
    </Container>
  );
};
