import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { NavLink, useNavigate } from "react-router-dom";

function Products() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const res = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await res.clone().json());
        setFilter(await res.json());
        setLoading(false);
      }

      return () => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        componentMounted = false;
      };
    };
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={300} />
        </div>
        <div className="col-md-3">
          <Skeleton height={300} />
        </div>
        <div className="col-md-3">
          <Skeleton height={300} />
        </div>
        <div className="col-md-3">
          <Skeleton height={300} />
        </div>
      </>
    );
  };

  const filterProduct = (filter) => {
    const updateFilter = data.filter((product) => product.category === filter);
    setFilter(updateFilter);
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="buttons d-flex flex-wrap justify-content-center mb-5 ">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => {
              setFilter(data);
            }}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => {
              filterProduct("men's clothing");
            }}
          >
            Men's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => {
              filterProduct("women's clothing");
            }}
          >
            Woman's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => {
              filterProduct("jewelery");
            }}
          >
            Jewelery{" "}
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => {
              filterProduct("electronics");
            }}
          >
            Electronic
          </button>
        </div>
        {filter.map((product) => {
          return (
            <div
              className="col-md-3 col-sm-6 mb-4"
              onClick={() => {
                navigate(`/MeoBrand/product/${product.id}`);
              }}
              key={product.id}
            >
              <div className="card h-100 text-center p-4">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                  height="250px"
                />
                <div className="card-body ">
                  <h5 className="card-title mb-0">
                    {product.title.substring(0, 12)}
                  </h5>
                  <p className="card-text">${product.price}</p>
                  <NavLink to={`/MeoBrand/product/${product.id}`}>
                    <button className="btn btn-outline-dark">By Now</button>
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div className="container my-5 py-5">
      <div className="row">
        <div className="col-12 mb-2">
          <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
          <hr />
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
}

export default Products;
