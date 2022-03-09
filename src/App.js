import React, { useState } from 'react';
import uuid from 'react-uuid';
import './style.css';

// const Cart = () => {
//   const [cartList, setCartList] = useState([]);

//   const products = [
//     {
//       id: uuid(),
//       name: 'Aloo',
//       price: 40,
//     },
//     {
//       id: uuid(),
//       name: 'Bhaloo',
//       price: 50,
//     },
//   ];

//   const addToCart = (product) => {
//     setCartList((cartList) => [...cartList, { ...product, quantity: 1 }]);
//   };

//   return (
//     <div>
//       <h1>My Products</h1>
//       <div style={{ border: '1px solid black', padding: '1rem' }}>
//         {products.map((product) => (
//           <>
//             <p>{product.name}</p>
//             <p>{product.price}</p>
//             <button onClick={() => addToCart(product)}>Add to cart</button>
//           </>
//         ))}
//       </div>
//       <h2>my cart</h2>
//       <ul>
//         {cartList.map(({ id, name, price, quantity }) => (
//           <li key="id">
//             {name} {price} {quantity}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const products = [
    {
      id: uuid(),
      name: 'pen',
      price: 50,
    },
    {
      id: uuid(),
      name: 'pencil',
      price: 100,
    },
  ];

  const addProductToCart = (product) => {
    setCartList((cartList) => [
      ...cartList,
      { ...product, quantity: quantity },
    ]);

    setQuantity((quantity) => quantity + 1);
  };

  return (
    <div>
      <h1>My Products</h1>
      <div style={{ border: '1px solid black', padding: '1rem' }}>
        {products.map((product) => (
          <>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <button onClick={() => addProductToCart(product)}>
              Add To Cart
            </button>
            <hr />
          </>
        ))}
      </div>
      <h1>My Cart</h1>
      <ul>
        {cartList.map(({ id, name, price, quantity }) => (
          <li key="id">
            {' '}
            {name} {price} {quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function App() {
  return (
    <div>
      <Cart />
    </div>
  );
}
