import styled from "styled-components";

// #40c463 - green;
//

export const CardContainerStyles = styled.div`
  width: 80vw;
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100vw;
  }
`;

export const CardStyles = styled.div`
  width: 25vw;
  height: 35vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: 10px;
  padding: 2.5rem 3.5rem 2rem;

  background-color: #0d1117;
  box-shadow: 0 6px 19.4px 0.6px black;

  &:hover {
    transform: scale(1.05);
    border-left: 5px solid #40c463;
    transition: 0.2s ease-in;
    
  }

  @media screen and (max-width: 1300px) {
    width: 80vw;
    height: 20vh;
  }

  @media screen and (max-width: 420px) {
    width: 100vw;
    min-height: 40vh;
    padding: 0;
    overflow-y: scroll;
  }
`;

export const CardTitleStyles = styled.div`
  font-size: 2em;
  color: #40c463;
  font-weight: bolder;
  @media screen and (max-width: 420px) {
    font-size: 1.5em;

  }
`;

export const CardHrefStyles = styled.a`
  text-decoration: none;
  color: white;
`;

export const CardDescriptionStyles = styled.div`
  font-size: 1.1em;
  margin-top: 20px;
  text-align: justify;

  @media screen and (max-width: 768px) {
    font-size: 1em;
    padding: 0 15px;
  }
`;

export const LoaderContainerStyles = styled.div`
  width: 80vw;
  height: 80vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// export const HeaderContainerForMobileStyles = styled.div`
// @media screen and (max-width: 1300px) {
//   .hey{
//     visibility: hidden;
//   }
// }
//`;
