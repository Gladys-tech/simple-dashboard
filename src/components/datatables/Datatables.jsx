import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Datatables() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  console.log(data);
  return (
    <div  className="App-header1">
      <div className='datatableTitle'>
            Add Products
            <Link to="/products/new" className='link1'>add new</Link>
        </div>
      {!data ? (
        <div class="d-flex justify-content-center">
        <div class="spinner-border text-warning" role="status">
        <span class="visually-hidden">Loading...</span>
        </div>
        </div>

      ) : (
        <div className="App-header">
          {[...data].map((info) => (
            <article key={info.id} className="App-id">
              <Link to={`/article/${info.id}`}>
                <>{info.image}</>
                <h4>{info.title}</h4>
                <p>{info.price}</p>
                <p>{info.description}</p>
                <p>{info.category}</p>
                <p>{info.rating}</p>
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

export default Datatables;
