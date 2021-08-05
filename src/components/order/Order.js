import { useState } from "react";
import Product from "./Product";
import styled from "styled-components";

const OrderWrapper = styled.div`
  border: 1px solid black;
  width: 300px;
`;
function Order() {
  const [apfelTotalPrice, setApfelTotalPrice] = useState(0);
  const [birneTotalPrice, setBirneTotalPrice] = useState(0);
  const [traubenTotalPrice, setTraubenTotalPrice] = useState(0);
  const totalPrice = apfelTotalPrice + birneTotalPrice + traubenTotalPrice;
  const lieferung = totalPrice < 15000 ? totalPrice + 2500 : totalPrice;

  return (
    <OrderWrapper>
      <Product
        name="사과"
        unitprice={1000}
        setTotalPrice={setApfelTotalPrice}
      />
      <Product name="배" unitprice={2000} setTotalPrice={setBirneTotalPrice} />
      <Product
        name="포도"
        unitprice={1500}
        setTotalPrice={setTraubenTotalPrice}
      />
      <div>합계 {lieferung}</div>
    </OrderWrapper>
  );
}
export default Order;
