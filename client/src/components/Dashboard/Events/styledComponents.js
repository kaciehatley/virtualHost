import styled from 'styled-components';
import { Table, Button, Header } from 'semantic-ui-react';


export const StyledCell = styled(Table.HeaderCell)`
    &&& {  
        background-color: #a9a6c9;
        color: white;
    }   
    `;

export const StyledButton = styled(Button)`
    &&& {
        width: 37px;
        background-color: #a9a6c9;
    }
    &&&:hover {
        background-color: #807da1;
    }
`;

export const StyledButton2 = styled(Button)`
  &&& {
    background-color: #a9a6c9;
    color: white !important;
    width: 85%;
    margin: 15px auto;
    padding-bottom: 30px;
  }
`;
export const StyledHeader = styled(Header)`
    &&& {  
        font-family: 'Source Sans Pro', sans-serif;   
        color: #a9a6c9;
        font-weight: 400;
        text-align: left;
    } 
    &&&.noPadding {
        padding-top: 0;
        margin-top: 0;
    } 
    `