import styled  from 'styled-components';

export const NavbarStyle = styled.div`

overflow:hidden;
display: flex;
flex-direction: row;
justify-content: space-between;
position: absolute;
  width: 100vw;
  padding: 0px;
  margin:0;
  min-height:50px;
  background-color: #ffffff;
  align-items:center;
  -webkit-box-shadow: -2px 12px 5px -4px rgba(0,0,0,0.26); 
box-shadow: -2px 12px 5px -4px rgba(0,0,0,0.26);
`
export const Img = styled.img`
    margin-left: 15px;
    min-height:inherit;  
`

export const Input = styled.input`
    height: 25px ;
    width:25%;
    margin-right:15px;
    border-radius:1px;
    border:1px solid #ccc;
    padding-left:5px
`