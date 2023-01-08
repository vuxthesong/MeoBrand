import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { useDispatch } from "react-redux";
import cartSlice from "./CartSlice";
import { useNavigate } from "react-router-dom";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addProduct = (product) => {
    dispatch(cartSlice.actions.ADDITEM(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await res.json());
      setLoading(false);
    };

    getProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Loading = () => {
    return (
      <div className="d-flex">
        <div className="col-md-6 mt-1">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6" style={{ lineHeight: 2 }}>
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={200} />
        </div>
      </div>
    );
  };

  const ShowProduct = () => {
    return (
      <div className="d-flex mt-5 justify-content-center px-5 flex-wrap ">
        <div className="col-md-6 col-sm-12 ">
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6 col-sm-12 mt-3">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p>
            Rating {product.rating && product.rating.rate}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-3">${product.price}</h3>
          <p className="lead">{product.description}</p>
          <button
            className="btn btn-outline-dark mx-2"
            onClick={() => addProduct(product)}
          >
            Add to cart
          </button>
          <button
            className="btn btn-outline-dark mx-2"
            onClick={() => navigate("/MeoBrand/cart")}
          >
            Go to Cart
          </button>
        </div>
      </div>
    );
  };

  return <>{loading ? <Loading /> : <ShowProduct />}</>;
}

export default Product;
