import styled from 'styled-components'

export const ButtonContainer = styled.button`
min-width: 160px;
width: auto;
height: 50px;
letter-spacing: 0.5px;
line-height: 50px;
font-size: 15px;
background-color: black;
color: white;
text-transform: uppercase;
font-family: 'Open Sans Condensed';
font-weight: bolder;
border: none;
cursor: pointer;
display: flex;
justify-content: center;

&:hover {
  background-color: white;
  color: black;
  border: 1px solid black;
}  
`

export const GoogleSignIn = styled(ButtonContainer)`
  background-color: #4285f4;
  color: white;
  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

export const Inverted = styled(ButtonContainer)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
}
`
  