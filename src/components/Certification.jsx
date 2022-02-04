import React from 'react'
import { H2Styled } from '../styled/H2Styled'
import { Container } from '../styled/EducationContainer'
import {ContainerItems} from '../styled/ContainerItems';
import {PStyled} from '../styled/PStyled';

export const Certification = () => {
    return (
        <div>
            <ContainerItems>
                <H2Styled name='Certificaciones'/>
                <Container>
                    <div className='Certification-item'>
                        <h3>FullStack MERN</h3>
                        <PStyled>Bictia</PStyled>
                    </div>
                </Container>
            </ContainerItems>
        </div>
    )
}