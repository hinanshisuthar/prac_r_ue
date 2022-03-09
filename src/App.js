import React, { useState, useEffect } from 'react';
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

//1 Counter
// const Counter = () => {
//   const [counter, setCounter] = useState(0);
//   const incrementCounter = () => {
//     setCounter((count) => count + 1);
//   };

//   const decrementCounter = () => {
//     setCounter((count) => count - 1);
//   };

//   useEffect(() => {
//     console.log(counter);
//   });

//   return (
//     <>
//       <h1>My Counter</h1>
//       <div>
//         <button onClick={incrementCounter}>+</button>
//         <p>{counter}</p>
//         <button onClick={decrementCounter}>-</button>
//       </div>
//     </>
//   );
// };

//predict the output

const Counter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // console.log('from useEffect...', counter);
    localStorage.setItem('counter', counter);
    console.log(`Hey! This is the initial value of Counter: ${counter}`);
  }, []);

  function incrementClickHandler() {
    setCounter((counter) => {
      // console.log('from click handler...', counter);
      return counter + 1;
    });
  }

  // console.log('before render...', counter);
  return (
    <div className="App">
      <h1>{counter} </h1>
      <button onClick={incrementClickHandler}>Increment </button>
    </div>
  );
};

export default function App() {
  return (
    <div>
      {/* <Cart /> */}
      <Counter />
    </div>
  );
}
