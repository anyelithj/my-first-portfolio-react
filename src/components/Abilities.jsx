import React from 'react'
import { H2Styled } from '../styled/H2Styled'
import {Container} from '../styled/EducationContainer'
import {AbilitiesItem, ContainerBar, Skill, H4 } from '../styled/AbilitiesStyled'
import {ContainerItems} from '../styled/ContainerItems';


export const Abilities = () => {
    return(
        <div>
            <ContainerItems>
                <H2Styled name='Habilidades'/>
                <Container>
                    <AbilitiesItem>
                        <H4>HTML</H4> 
                        <ContainerBar>
                            <Skill> 
                                {/* <Process width='80%' background='#ff8c00' /> */}
                            </Skill>
                        </ContainerBar>    
                    </AbilitiesItem>
                    <AbilitiesItem>
                        <H4>CSS</H4> 
                        <ContainerBar>
                            <Skill> 
                                {/* <Process width='60%' background='#6495ed' /> */}
                            </Skill>
                        </ContainerBar>    
                    </AbilitiesItem>
                    <AbilitiesItem>
                        <H4>JavaScript</H4> 
                        <ContainerBar>
                            <Skill>
                                {/* <Process width='50%' background='#ffd700' /> */}
                            </Skill>
                        </ContainerBar>    
                    </AbilitiesItem>
                    <AbilitiesItem>
                        <H4>React</H4> 
                        <ContainerBar>
                            <Skill>
                                {/* <Process width='10%' background='#00bfff' /> */}
                            </Skill>
                        </ContainerBar>    
                    </AbilitiesItem>
                    <AbilitiesItem>
                        <H4>Node</H4> 
                        <ContainerBar>
                            <Skill>
                                {/* <Process width='10%' background='#228b22' /> */}
                            </Skill>
                        </ContainerBar>    
                    </AbilitiesItem>
                    <AbilitiesItem>
                        <H4>Git y GitHub</H4> 
                        <ContainerBar>
                            <Skill>
                                {/* <Process width='10%' background='#dc143c' /> */}
                            </Skill>
                        </ContainerBar>    
                    </AbilitiesItem>        
                </Container>
            </ContainerItems>
        </div>
    )
}