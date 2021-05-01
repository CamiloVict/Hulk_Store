import styled  from 'styled-components';

export const Article = styled.article`
display: flex;
flex-direction: column;
justify-content: space-between;
 min-height: 150px;
 max-width: 200px;
 box-shadow: 0 10px 14px rgba(0,0,0,.2);
 border-radius: 10px;
`
export const ImgWrapper = styled.div`
    display: block;
    height: 0;
    overflow:hidden;
    padding: 56.25% 0 0 0;
    position: relative;
    width: 100%;
    margin:0;
`

export const Image = styled.img`
    height: 100%;
    object-fit: cover;
    position: absolute;
    top:0;
    width:100%;
`
export const Details = styled.div`
  height: 40px;
  max-width: inherit;
  display: flex;
  flex-direction:row;
  justify-content: space-between;
  align-items:center;
`

export const Price = styled.div`
  max-width: 50px;
  height: inherit;
  padding: 0 10px;
  align-items: center;
  padding: 10px
`

export const Quantity = styled.div`
  max-width: 50px;
  height: inherit;
  padding: 0 10px;
  align-items: center;
  padding:10px;
`