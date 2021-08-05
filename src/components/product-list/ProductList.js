import { useState } from "react";
import styled from "styled-components";
import apfelimg from "../../images/apfel.jpg";
import birneimg from "../../images/birne.jpg";
import traubenimg from "../../images/trauben.jpg";
import Product from "./Product";
import ProductDetail from "./ProductDetail";

const ProductListWrapper = styled.div``;
const productData = [
  {
    name: "사과",
    price: 1000,
    info: "사과설명",
    obstimg: apfelimg,
  },
  {
    name: "배",
    price: 2000,
    info: "배설명",
    obstimg: birneimg,
  },
  {
    name: "포도",
    price: 1700,
    info: "포도설명",
    obstimg: traubenimg,
  },
];

function ProductList() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const Products = productData.map((product) => {
    return (
      <Product
        name={product.name}
        productprice={product.price}
        info={product.info}
        obstimg={product.obstimg}
        click={() => {
          setSelectedProduct(product);
        }}
      />
    );
  });
  return (
    <ProductListWrapper>
      {Products}
      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          setSelectedProduct={setSelectedProduct}
        />
      )}
    </ProductListWrapper>
  );
}
export default ProductList;
