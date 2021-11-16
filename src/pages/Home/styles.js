import styled  from "styled-components";
 export const Wrapper = styled.div `
   display: flex;
   flex-direction: row;

 `;

export  const Container = styled.aside `
  background-color: ${(props) => props.theme.colors.background};
  width: 28vw;
  height: 100vh;
  overflow-y: auto;

`;

export const Seach = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
background-color: #ffffff;
padding: 16px;
`;
export const Logo = styled.img`
   margin-bottom: 15px;
`;

export const Map = styled.div`
  height: 100vh;
  width: 100vw;
`;
export const CarouselTitle = styled.h1`
 font-family: ${(props) => props.theme.fonts.regular};
 color: ${(props) => props.theme.colors.text};
 //font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
  margin: 16px 0;
`;


export const SliderStyled = styled.img`
margin: 2px;
`;

export const  ModalTitle =  styled.p `
  margin-bottom: 10px;
  letter-spacing: 0.11px;
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  text-transform: none;
  line-height: 29px;
  font-size: 24px;
  font-weight: bold;
`;
export const ModalContent = styled.div`
 margin-bottom: 10px;
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  line-height: 19px;
  font-size:  16px;
  font-weight: normal;
`;
