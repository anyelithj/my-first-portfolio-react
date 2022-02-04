import React from 'react'
import { H2Styled } from '../styled/H2Styled'
import { Container } from '../styled/EducationContainer'
import {ContainerItems} from '../styled/ContainerItems';
import {PStyled} from '../styled/PStyled';

export const Experience = () => {
    return (
        <div>
            <ContainerItems>
                <H2Styled name='Experience'/>
                <Container>
                    <div className='Experience-item'>
                        <h3>Analista de Sistema(soporte)</h3>
                        <PStyled>Event TIC</PStyled>
                    </div>
                </Container>
            </ContainerItems>
        </div>
    )
}