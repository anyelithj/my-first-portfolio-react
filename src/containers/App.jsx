import React from 'react';
import styled from 'styled-components';
import About from '../components/About';
import { Education } from '../components/Education';
import { Abilities } from '../components/Abilities';
import { Certification } from '../components/Certification';
import {MainContainer, subContainer } from '../styled/FlexContainerStyled';


const GlobalStyle = styled.div`
    body{
        font-family: 'Lato', sans-serif;
        margin: 0;
        padding: 0;
        background: #F5F5F5;

    }
    
`;

export const App = () => {
    return (
        <GlobalStyle>
           <MainContainer>
                <About/>
                <subContainer> 
                    <Education/>
                    <Certification/>
                    <Abilities/>
                </subContainer>
           </MainContainer>
        </GlobalStyle>
    )
}
