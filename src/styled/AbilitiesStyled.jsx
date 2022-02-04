import styled from 'styled-components'


const AbilitiesItemStyle = styled.div`
   text-align: center;
`;

const Container = styled.div`
    width: 40%;
    background-color: #ddd;
`;

const Skills = styled.div`
  text-align: right;
  padding-top: 10px;
  padding-bottom: 10px;
  color: white;
`;
const H4Styled = styled.h4`
    text-align: start;
`
// const ProcessBar = styled.div `
//   width: ${width};
//   background: ${background};
// `
// export const Process = ({width, background}) => <ProcessBar>{width, background}</ProcessBar>
export const AbilitiesItem = AbilitiesItemStyle;
export const ContainerBar = Container;
export const Skill = Skills;
export const H4 = H4Styled;