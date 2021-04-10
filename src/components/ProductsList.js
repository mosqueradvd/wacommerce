import React, { useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import TutorialDataService from "../services/ProductService";
import Product from "./Product";

const ProductsList = () => {
  const [currentProduct, setCurrentProduct] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);

  const [products, loading, error] = useCollection(TutorialDataService.getAll().orderBy("title", "asc"));

  const refreshList = () => {
    setCurrentProduct(null);
    setCurrentIndex(-1);
  };

  const setActiveProduct = (product, index) => {
    const { title, description, published } = product.data();

    setCurrentProduct({
      id: product.id,
      title,
      description,
      published,
    });

    setCurrentIndex(index);
  };

  return (
    <div className="list row">
      <div className="col-md-6">
        <h4>products List</h4>
        {error && <strong>Error: {error}</strong>}
        {loading && <span>Loading...</span>}
        <ul className="list-group">
          { !loading &&
            products &&
            products.docs.map((product, index) => (
              <li
                className={"list-group-item " + (index === currentIndex ? "active" : "")}
                onClick={() => setActiveProduct(product, index)}
                key={product.id}
              >
                { product.data().title }
                { /*product.title*/ }
              </li>
            ))}
        </ul>
      </div>
      <div className="col-md-6">
        {currentProduct ? (
          <Product product={currentProduct} refreshList={refreshList} />
        ) : (
          <div>
            <br />
            <p>Click an item for more info</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsList;
