import React from 'react';

function Minicart({ toggleCart, isCartOpen }) {

  return (
    <div className={`cart-sidebar ${isCartOpen ? 'cart-sidebar--open' : ''}`}>
      <div className="cart-sidebar__header">
        <h3>Carrinho</h3>
        <button onClick={toggleCart}><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 100 100">
          <line x1="10" y1="10" x2="90" y2="90" stroke="black" stroke-width="10" />
          <line x1="10" y1="90" x2="90" y2="10" stroke="black" stroke-width="10" />
        </svg>
        </button>
      </div>
      <p>Carrinho está vazio</p>
    </div>
  );
}

export default Minicart;
