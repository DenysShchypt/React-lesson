import styled from 'styled-components'

export const Products = styled.li`
display: flex;
flex-wrap: wrap;
align-content:space-between;
  border: 1px solid black;
  padding: 10px;
  border-radius: 10px;
  max-width: 370px;

.productImg {
  max-width: 350px;
  width: 100%;
  border-radius:10px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  object-position: center;
}
.textItem{
  margin: 0;
  margin-bottom: 10px;
  font-size: 20px;
  text-align: start;
}

.discountBage {
  padding: 10px;
  border: 1px solid silver;
  border-radius: 10px;
  box-shadow: 2px 3px 51px - 14px rgba(0, 0, 0, 0.75);
}

.apology {
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
}

.productBtn {
  width: 100%;
  padding: 15px;
  margin-bottom: 5px;
  font-size: 14px;
  border-radius: 5px;
  background-color: transparent;
  cursor: pointer;
}`
