import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="col-sm-6 col-md-4 product-item animation-element slide-left-flip-x-y">
      <div className="product-container">
        <div className="row">
          <div className="col-md-12">
            <Link to={`/product/${product._id}`} className="product-image">
              <img className="img-fluid rounded" src={product.image} alt="" />
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <h4>
              <Link
                className="text-decoration-none"
                to={`/product/${product._id}`}
              >
                {product.name}
              </Link>
            </h4>
          </div>
          <div className="col-4">
            <Link
              to={`/product/${product._id}#reviews`}
              className="small-text text-decoration-none"
            >
              {product.reviews.length} reviews
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p className="product-description">{product.description} </p>
            <div className="row">
              <div className="col-6">
                <Link
                  to={`/product/${product._id}`}
                  className="btn btn-warning py-0 text-decoration-none"
                  type="button"
                >
                  View
                </Link>
              </div>
              <div className="col-6">
                <p className="product-price">₹{product.price} </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
