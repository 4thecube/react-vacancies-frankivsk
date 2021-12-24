import styled from "styled-components";

export const CompanyBlockContainer = styled.div`
  width: ${(props) => `calc(100%/${props.length})`};
  height: 150px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 38px;
  font-weight: bold;

  &:hover {
    color: ${(props) => props.color};
  }
`;
