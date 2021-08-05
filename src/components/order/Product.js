import { useState } from "react";
import styled from "styled-components";

const ProductWrapper = styled.div`
  display: flex;
`;

function Product({ name, unitprice, setTotalPrice }) {
  const [quentity, setQuentity] = useState(1);
  const decrease = () => {
    if (quentity > 0) {
      setQuentity(quentity - 1);
    }
  };
  const increase = () => {
    if (quentity < 9) {
      setQuentity(quentity + 1);
    }
  };
  const price = unitprice * quentity;
  setTotalPrice(price);
  
  return (
    <ProductWrapper>
      <div>{name}</div>
      <button onClick={decrease}>-</button>
      <div>{quentity}</div>
      <button onClick={increase}>+</button>
      <div>{price}</div>
    </ProductWrapper>
  );
}
export default Product;
