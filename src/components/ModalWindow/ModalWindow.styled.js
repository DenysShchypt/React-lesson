import styled from "styled-components";

export const ModalStyle = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  &:hover{
    cursor: pointer;
  }
.modal{
  position: absolute;
  width: 400px;
  height: 500px;
  background-color: white;
  border-radius: 10px;
  padding: 30px;
   &:hover{
    cursor: auto;
  }
}
.closeBtn{
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
}
.text{
  font-size: 20px;
  text-align: start;
}
`;