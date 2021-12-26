import styled from "styled-components";

export const VacancyListContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const VacancyOverfowBlocker = styled.div`
  margin-top: ${(props) => (props.isExtended ? "0" : "50px")};
  height: ${(props) => (props.isExtended ? "100%" : "700px")};

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  overflow-y: ${(props) => (props.isScrollable ? "scroll" : "scroll")};
`;
