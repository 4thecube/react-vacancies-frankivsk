import styled from "styled-components";

export const CardContainerStyles = styled.div`
  width: 80vw;
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const CardStyles = styled.div`
  width: 25vw;
  height: 35vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  overflow-y: scroll;
  scrollbar-width: thin;
  margin: 10px;
  padding: 2.5rem 3.5rem 2rem;

  background-color: #0d1117;
  box-shadow: 0 6px 19.4px 0.6px black;

  z-index: 3;

  &:hover {
    transform: scale(1.05);
    border-left: 5px solid #40c463;
  }
`;

export const CardTitleStyles = styled.div`
  font-size: 2em;
  color: #40c463;
`;

export const CardHrefStyles = styled.a`
  text-decoration: none;
  color: white;
`;

export const CardDescriptionStyles = styled.div`
  font-size: 1.1em;
  margin-top: 20px;
  text-align: justify;
`;

export const LoaderContainerStyles = styled.div`
  width: 80vw;
  height: 80vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;
