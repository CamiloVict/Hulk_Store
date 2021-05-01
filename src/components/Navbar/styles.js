import styled  from 'styled-components';
import {Link as LinkRouter} from '@reach/router'

export const NavbarStyle = styled.div`
  padding-right:10px;
  align-items:center;
  -webkit-box-shadow: -2px 12px 5px -4px rgba(0,0,0,0.26); 
  box-shadow: -2px 12px 5px -4px rgba(0,0,0,0.26);
`
export const Link = styled(LinkRouter)`
    display: flex;
    flex-direction: column;
    text-align: center;
    text-decoration: underline;
    width: 75px;
    color:black;
`