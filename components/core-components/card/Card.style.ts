import styled from '@emotion/styled';


const CardWrapper = styled.article`
  width: 100%;
min-height: 120px;
margin-block: 0.625rem;
padding-block: 0.625rem;
display: flex;
flex-direction: row;
gap:0.625rem;
border-radius: 14px;
border: 1px solid #FFF;
background: linear-gradient(135deg, rgba(255, 255, 255, 0.70) 0%, rgba(255, 255, 255, 0.10) 100%);
box-shadow: 0px 4px 14px 0px rgba(76, 76, 76, 0.05);

img{
    flex: .5;
  padding-left: 2rem;
}
  `

  const ProductInfoWrap =styled.div`
    flex: 2;
    h4{
        color: #1C1C1C;
  font-size: 0.875rem;
  font-weight: 500;
line-height: 120%;
margin-bottom: 0.4rem;
    }
  `
  const ProductDescriptionWrap = styled.p`
    color: #7A7A7A;
 font-size: 0.75rem;
  font-weight: 400;
  line-height: 120%;
  margin-bottom: 3rem;
  padding-right: 2rem;
  `
  const ProductPriceWrap = styled.p`
   display: flex;

  gap: 1rem;
  padding-right: 2rem;
color: #A2A2A2;
font-size: 0.75rem;
line-height: 120%;
margin-bottom: 0.4rem;
  `

export {CardWrapper,ProductInfoWrap,ProductDescriptionWrap,ProductPriceWrap}