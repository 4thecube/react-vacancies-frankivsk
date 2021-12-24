import styled from "styled-components";

export const CompaniesList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CompaniesMessage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 75px;
  margin-left: 25px;
  padding: 10px;
  font-size: 42px;
  color: black;
  border-left: 5px solid #6453bc;
`;

export const CompaniesMessageButton = styled.button`
  height: 60px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  background-color: #17c583;
  font-weight: bold;
  margin-right: 50px;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0cad70;
  }
`;

export const CompaniesBlockContainer = styled.div`
  background-color: #efefef;
`;
