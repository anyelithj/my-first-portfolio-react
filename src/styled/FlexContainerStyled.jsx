import styled from 'styled-components'

const MainContainerStyled = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const subContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    
    @media (max-width: 768px) {
        flex-direction: row;
    }
`;

export const subContainer = subContainerStyled;
export const MainContainer = MainContainerStyled;