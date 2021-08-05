import styled from "styled-components";

const ProductDetailWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
`;
const Modal = styled.div`
  width: 70%;
  height: 70%;
  background-color: white;

  .bild {
    width: 150px;
    height: 150px;
  }
`;

function ProductDetail({ product, setSelectedProduct }) {
  return (
    <ProductDetailWrapper>
      <Modal>
        <img className="bild" src={product.obstimg} />
        <button onClick={() => setSelectedProduct(null)}>x</button>
        <div>{product.name}</div>
        <div>{product.price}</div>
        <div>{product.info}</div>
      </Modal>
    </ProductDetailWrapper>
  );
}
export default ProductDetail;
