import styled  from 'styled-components';

export const Container = styled.div`
position: relative;
display: flex;
flex-direction: column;
justify-content: space-between;
box-shadow: 0 10px 14px rgba(0,0,0,.2);
border-radius: 10px;
padding: 5px 25px;
max-width:300px ;
height:500px;
`
export const Footer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
margin-bottom:0;
padding-bottom:5px
`
export const Title = styled.h1`
display: block;
margin:10px;
text-align:left;
margin-bottom:5px
`
export const SubTitle = styled.h2`
display: block;
margin:10px;
text-align:left;
`
export const Description = styled.div`
display: block;
margin:10px;
text-align:left;
`
export const FooterItem = styled.div`

bottom:0;
display: block;
margin:10px;
`
