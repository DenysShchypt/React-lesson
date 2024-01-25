import styled from "styled-components"

export const ListOfProduct = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
  
  .allList{
      display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 25px;
    list-style: none;
    padding: 0;
    max-width: 450px;
  }
  .itemBox{
    width: 400px;
    border: 2px solid black;
  }
  .productPhoto{
    width: 300px;
    height: 300px;
    border-radius: 2px;
    overflow: hidden;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`