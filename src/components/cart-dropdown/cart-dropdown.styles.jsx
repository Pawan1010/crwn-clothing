import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  overflow: scroll;

`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`


// .cart-dropdown-container {
//     position: absolute;
//     width: 240px;
//     height: 340px;
//     display: flex;
//     flex-direction: column;
//     padding: 20px;
//     border: 1px solid black;
//     background-color: white;
//     top: 90px;
//     right: 40px;
//     z-index: 5;
//     overflow: scroll;
  
//     .empty-message {
//       font-size: 18px;
//       margin: 50px auto;
//     }
  
//     .cart-items {
//       height: 20px;
//       display: flex;
//       flex-direction: column;
//       overflow: scroll;
      
//     }
  
//     button {
//       margin-top: auto;
//     }
//   }
  