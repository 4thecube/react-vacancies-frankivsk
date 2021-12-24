import styled from "styled-components";

export const InfoBlockContainer = styled.div`
  width: 370px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 20px;
  box-shadow: 0 6px 19.4px 0.6px hsl(0deg 0% 86% / 70%);
`;

export const VacanciesCountContainer = styled.div`
  font-size: 32px;
  font-weight: bold;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const VacanciesCount = styled.div`
  font-size: 184px;
  margin-right: 25px;
  color: #17c583;
  text-shadow: 6px 6px 0px rgba(0, 0, 0, 0.2);
`;

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
`;
