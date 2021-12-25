import styled from "styled-components";

export const InfoBlockContainer = styled.div`
  width: 400px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 20px;
  margin: 50px;

  background-color: #161b22;
`;

export const VacanciesCountContainer = styled.div`
  font-size: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const VacanciesCount = styled.div`
  font-size: 184px;
  margin-right: 25px;
  color: #6453bc;
  text-shadow: 6px 6px 0px #17c583;
  font-weight: bold;
`;

//#161b22;
// #17c583;

export const VacanciesText = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const VacanciesRole = styled.div`
  color: white;
  padding: 5px;
  background-color: #6453bc;
  font-weight: bold;
`;
