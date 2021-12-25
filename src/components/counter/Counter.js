import styled, { keyframes } from "styled-components";

export const CountColorChange = keyframes`
  from{
    color: rgba(0, 0, 0, 0.2);
    text-shadow: none;
  }
  to{
    color: #17c583;
    text-shadow: 10px 10px 0px rgba(0, 0, 0, 0.2);
  }
`;

export const Anchor = styled.div`
  width: 0;
  height: 0;
  position: absolute;
  top: ${(props) => (props.isMinimized ? "90%" : "-40%")};
  left: ${(props) => (props.isMinimized ? "10%" : "-70%")};
`;

export const CounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const CountAllContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CountAll = styled.div`
  width: 50%;
  font-size: 550px;
  font-weight: bold;
  color: #6453bc;
  text-shadow: 10px 10px 0px rgba(0, 0, 0, 0.2);
  animation-name: ${CountColorChange};
  animation-duration: 2.5s;
  animation-timing-function: cubic-bezier(1, 0.08, 1, 0.11);
`;

export const CoutAllText = styled.div`
  width: 50%;
  text-align: start;
  font-size: 90px;
  margin-left: 60px;
  position: relative;
`;

export const CounterPerRoles = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const OpenModalWindowButton = styled.button`
  font-size: 30px;
  height: 90px;
  width: 200px;
  margin-left: 30px;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: #17c583;
  &:hover {
    background-color: #0cad70;
  }
`;
