import React, { useState, useEffect } from "react";
import {
  getAllProducts,
  getProductByCategory,
} from "../productList/ProductList";
import ProductCard from "../productCard/ProductCard";
import { useParams } from "react-router-dom";

function ProductListContainer() {
  const [productList, setProductList] = useState([]);
  const { cat } = useParams();

  useEffect(() => {
    if (cat === undefined) {
      getAllProducts().then((result) => setProductList(result));
    } else {
      getProductByCategory(cat).then((result) => setProductList(result));
    }
  }, [cat]);

  return (
    <div className="product-container">
      {productList.map((p) => {
        return (
          <ProductCard
            key={p.id}
            price={p.price}
            stock={p.stock}
            category={p.category}
            img={p.img}
            title={p.title}
            id={p.id}
          />
        );
      })}
    </div>
  );
}

export default ProductListContainer;
