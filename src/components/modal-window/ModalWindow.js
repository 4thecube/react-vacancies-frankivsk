import styled, { keyframes } from "styled-components";

export const HeaderBackgroundAnimation = keyframes`

  0%{
    background-position:10% 0%
  }
  50%{
    background-position:91% 100%}
  100%{
    background-position:10% 0%};
`;

export const ModalWindowContainer = styled.div`
  position: fixed;
  z-index: 122;
  top: ${(props) =>
    props.isMinimized ? "90%" : props.isExtended ? "0" : "10%"};
  left: ${(props) =>
    props.isMinimized ? "10%" : props.isExtended ? "0" : "20%"};
  width: ${(props) =>
    props.isExtended ? "100%" : props.isMinimized ? "350px" : "1150px"};
  height: ${(props) =>
    props.isExtended ? "100vh" : props.isMinimized ? "50px" : "750px"};
  // background-color: #161b22;
  border: 2px solid #6453bc;
  background-color: #f9bf01;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: ${(props) => (props.isMinimized ? "30px" : "0")};
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ModalWindowHeader = styled.div`
  height: 50px !important;
  width: ${(props) =>
    props.isExtended ? "100%" : props.isMinimized ? "350px" : "1150px"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) =>
    props.isMinimized
      ? "linear-gradient(130deg, #ffc106, #e21f6f, #2743bc)"
      : "#2743bc"};
  background-size: 200% 200%;
  animation-name: ${(props) =>
    props.isMinimized ? HeaderBackgroundAnimation : ""};
  animation-duration: 2s;
  animation-timing-function: cubic-bezier(0, 0, 1, 1);
  animation-iteration-count: infinite;
  position: ${(props) => (props.isExtended ? "relative" : "fixed")};
`;

export const ModalWindowTitle = styled.div`
  margin-left: 20px;
  color: white;
  font-weight: bold;
  font-size: 25px;
`;

export const ModalWindowButton = styled.button`
  width: 40px;
  height: 40px;
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
