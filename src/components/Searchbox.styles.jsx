import styled from "styled-components";

export const SearchBoxStyles = styled.input`
  -webkit-appearance: none;
  border: none;
  outline: none;
  padding: 10px;
  width: 90px;
  font-size: 1.5rem;
  line-height: 30px;
  background-color: none;
  border-bottom: 3px solid #1096de;
  background-color: #161b22;
  color: white;

  &:focus {
    width: 450px;
    transition: 0.5s ease-out;
  }
`;

export const SearchBoxContainerStyles = styled.div`
  width: 35vw;
  padding: 1.5rem;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchIconStyles = styled.div`
  width: 50px;
  height: 50px;
  color: white;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
