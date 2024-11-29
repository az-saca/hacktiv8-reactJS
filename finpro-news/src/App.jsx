import { useState, useEffect } from 'react'
import { getProducts } from './Api'

import './App.css'

function App() {

  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    getProducts()
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      });
    }, []);
      

  return (
    <>
      <div
        className="container"
        style={{ display: "grid", gridTemplate: "repeat(5, 1fr)"}}>
        {products.map((product) => (
          <div
            className="card"
            key={product.id}
            style={{
              width: "18rem",
              border: "1px solid black",
            }}>
            <img
              src={product.image}
              className="card-img-top"
              alt={product.title}
              style={{ width: "50%" }}
            />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.price}</p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App
