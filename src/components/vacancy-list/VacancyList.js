import styled from "styled-components";

export const ModalWindow = styled.div`
  position: ${(props) => (props.isMinimized ? "fixed" : "absolute")};
  top: ${(props) => (props.isMinimized ? "90%" : "-40%")};
  left: ${(props) => (props.isMinimized ? "10%" : "-70%")};
  width: ${(props) =>
    props.isExtended ? "100%" : props.isMinimized ? "350px" : "1150px"};
  height: ${(props) =>
    props.isExtended ? "100vh" : props.isMinimized ? "50px" : "750px"};
  background-color: #161b22;
  border: 2px solid #6453bc;

  margin-left: ${(props) => (props.isMinimized ? "30px" : "0")};
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ModalWindowHeader = styled.div`
  height: 50px;
  background-color: #6453bc;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalWindowTitle = styled.div`
  margin-left: 20px;
  color: white;
  font-weight: bold;
  font-size: 25px;
`;

export const ModalWindowButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #6453bc;
  color: white;
  font-weight: 900;
  border: none;
  outline: none;
  margin: 0 5px;
  cursor: pointer;
  &:hover {
    background-color: #17c583;
  }
`;
