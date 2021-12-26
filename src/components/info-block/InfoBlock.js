import styled, { keyframes } from "styled-components";

export const BlockAnimation = keyframes`
  from {
    width: 290px;
    height: 150px;
    padding: 20px;
    top: 0;
    left: 0;
  } to {
    width: 150px;
    height: 90px;
    padding: 25px;
    top: -15%;
    left: -20%;
  }
`;

export const InfoBlockContainer = styled.div`
  width: 400px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 20px;
  margin: 50px;
  position: relative;
  // background-color: #161b22;
  background-color: #00ebaf;
  color: black;
`;

export const VacanciesCountContainer = styled.div`
  font-size: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const VacanciesCount = styled.div`
  font-size: 154px;
  width: 50%;
  color: #6453bc;
  text-shadow: 6px 6px 0px #17c583;
  font-weight: bold;
  margin-left: 20px;
`;

//#161b22;
// #17c583;

export const VacanciesText = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const VacanciesRole = styled.div`
  width: 150px;
  height: 90px;
  position: absolute;
  top: -15%;
  left: -20%;
  color: white;
  padding: 25px;
  background-color: #6453bc;
  font-weight: bold;
  font-size: 45px;

  animation: ${BlockAnimation};
  animation-duration: 2s;
  animation-timing-function: cubic-bezier(0, 0, 1, 1);
`;

export const VacanciesRoleText = styled.div`
  font-size: 22px;
`;
