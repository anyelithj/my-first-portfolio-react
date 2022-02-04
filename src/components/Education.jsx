import React from 'react';
import { H2Styled } from '../styled/H2Styled';
import {Container} from '../styled/EducationContainer';
import {ContainerItems} from '../styled/ContainerItems';
import {PStyled} from '../styled/PStyled';

export const Education = () => {
    return (
        <div>
            <ContainerItems>
                <H2Styled name='Mis Estudios'/>
                <Container>
                    <div className='Education-item'>
                        <h3>Sena <span> 2015</span></h3>
                        <PStyled>Analista y Desarrolladora de Sistemas de Información</PStyled>
                    </div>
                    <div className='Education-item'>
                        <h3>Bictia <span> 2019</span></h3>
                        <PStyled>FullStack MERN</PStyled>
                    </div>
                </Container>
            </ContainerItems>
        </div>
    )
}