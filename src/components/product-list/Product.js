import { useState } from "react";
import styled from "styled-components";

const ProductsWrapper = styled.div`
  display: flex;

  .kasten {
    display: flex;
    border: 1px dashed gray;
    width: 300px;
    padding: 0;
  }
  .rechts {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    margin: 5px;
  }
  .oben {
    display: flex;
    margin-bottom: 5px;
    justify-content: space-between;
  }
  .bild {
    width: 100px;
    height: 100px;
    margin: 5px;
  }
`;

function Product({ obstimg, name, productprice, info, click }) {
  return (
    <ProductsWrapper onClick={click}>
      <div className="kasten">
        <div className="links">
          <img className="bild" src={obstimg}></img>
        </div>
        <div className="rechts">
          <div className="oben">
            <div>{name}</div>
            <div>{productprice}원</div>
          </div>
          <div>{info}</div>
        </div>
      </div>
    </ProductsWrapper>
  );
}
export default Product;
