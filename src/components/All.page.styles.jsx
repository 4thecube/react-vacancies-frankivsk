import styled from 'styled-components'; 

export const AllPageStyled = styled.div`
    margin: 50px 0;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`; 

export const VacanciesCountContainerStyles = styled.div`
    width: 35vw;
    height: 20vh;
    color: white;
    background-color: #0d1117;
    font-size: 1.5em;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 25px;
    padding: 1.5rem;

    @media screen and (max-width: 1000px) {
        width: 90vw;
    }
`; 

export const VacanciesCountStyles = styled.span`
    font-size: 3em;
    color: green;
`; 