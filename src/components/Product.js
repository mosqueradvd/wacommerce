import React, { useState } from "react";
import TutorialDataService from "../services/ProductService";

const Product = (props) => {
  const initialState = {
    key: null,
    title: "",
    description: "",
    published: false,
  };
  const [currentProduct, setCurrentProduct] = useState(initialState);
  const [message, setMessage] = useState("");

  const { product } = props;
  if (currentProduct.id !== product.id) {
    setCurrentProduct(product);
    setMessage("");
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentProduct({ ...currentProduct, [name]: value });
  };

  const updatePublished = (status) => {
    TutorialDataService.update(currentProduct.id, { published: status })
      .then(() => {
        setCurrentProduct({ ...currentProduct, published: status });
        setMessage("The item was updated successfully!");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const updateProduct = () => {
    const data = {
      title: currentProduct.title,
      description: currentProduct.description,
    };

    TutorialDataService.update(currentProduct.id, data)
      .then(() => {
        setMessage("Item was updated successfully!");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteProduct = () => {
    TutorialDataService.remove(currentProduct.id)
      .then(() => {
        props.refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentProduct ? (
        <div className="edit-form">
          <h4>Tutorial</h4>
          <form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={currentProduct.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={currentProduct.description}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
              {currentProduct.published ? "Published" : "Pending"}
            </div>
          </form>

          {currentProduct.published ? (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatePublished(false)}
            >
              UnPublish
            </button>
          ) : (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatePublished(true)}
            >
              Publish
            </button>
          )}

          <button className="badge badge-danger mr-2" onClick={deleteProduct}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateProduct}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Click an item for more info</p>
        </div>
      )}
    </div>
  );
};

export default Product;
