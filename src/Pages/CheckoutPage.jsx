import React from 'react'

import Checkout from "../components/Checkout";
import ProductReview from "../components/ProductReview";
import NavbarC from "../components/NavbarC";
import FooterC from '../components/FooterC';

const CheckoutPage = () => {
  return (
    <>
       <NavbarC/>
       <Checkout />
       <ProductReview />
       <FooterC />
    </>
  )
}

export default CheckoutPage