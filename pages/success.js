import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Obrigado pela sua compra!</h2>
        <p className="email-msg">A fatura foi enviada para o seu email.</p>
        <p className="description">
          Se tiver alguma questão, por favor envie-nos um email para
          <a className="email" href="mailto:justo.susana@gmail.com">
            justo.susana@gmail.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continue a Comprar
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Success