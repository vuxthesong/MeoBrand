import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import cartSlice from "./CartSlice";
// import { useMemo } from "react";

function Cart() {
  const dispatch = useDispatch();

  const state = useSelector((state) => state.cart);
  console.log(state);

  const addProduct = (product) => {
    dispatch(cartSlice.actions.ADDITEM(product));
  };

  const deleteProduct = (product) => {
    dispatch(cartSlice.actions.DELETEITEM(product));
  };

  const result = state.reduce(
    (total, product) => total + product.qty * product.price,
    0
  );

  return (
    <div>
      {state.map((product) => {
        return (
          <div className="container mt-5" key={product.id}>
            <div className="row">
              <div className="col-md-4">
                <img
                  src={product.image}
                  alt={product.title}
                  height="200px"
                  width="180px"
                />
              </div>
              <div className="col-md-4">
                <h3>{product.title}</h3>
                <p className="lead fw-bold">
                  {product.qty} x ${product.price} = $
                  {(product.qty * product.price).toFixed(2)}
                </p>
                <button
                  className="btn btn-outline-dark me-4"
                  onClick={() => deleteProduct(product)}
                >
                  <i className="fa fa-minus"></i>
                </button>
                <button
                  className="btn btn-outline-dark me-4"
                  onClick={() => addProduct(product)}
                >
                  <i className="fa fa-plus"></i>
                </button>
              </div>
            </div>
            <hr />
          </div>
        );
      })}
      <p className="fw-bold fs-1 d-flex justify-content-end me-5 pe-5">
        Total : ${result.toFixed(2)}
      </p>
      ;
    </div>
  );
}

export default Cart;
