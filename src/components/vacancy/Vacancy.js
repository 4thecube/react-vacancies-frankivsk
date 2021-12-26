import styled from "styled-components";

export const VacancyContainer = styled.div`
  width: 330px;
  height: 230px;

  font-size: 24px;

  padding: 10px;
  margin: 10px 10px 10px 10px;

  background-color: #5b06d2;
  border-top: 12px solid #5b06d2;
  cursor: pointer;

  &:hover {
    color: #00ebaf;
    border-top: 12px solid #00ebaf;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  }
`;

export const VacancyTitle = styled.h2`
  font-size: 34px;
`;
