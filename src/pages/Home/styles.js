import styled  from "styled-components";

 export const Wrapper = styled.div `
   display: flex;
   flex-direction: row;

 `;

export  const Container = styled.aside `
  background-color: ${(props) => props.theme.colors.background};
  width: 28%;
  height: 100vh;
  overflow-y: auto;

`;

export const Seach = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
background-color: #ffffff;
padding: 1em;
`;
export const Logo = styled.img`
   margin-bottom: 5%;
`;

export const Map = styled.div`
  height: 100vh;
  width: 100vw;
  position:relative;
  overflow-x: hidden;
`;
export const CarouselTitle = styled.h1`
 font-family: ${(props) => props.theme.fonts.regular};
 color: ${(props) => props.theme.colors.text};
  font-size: 2em;
  font-weight: bold;
  line-height: 29px;
  margin-rigth: 16px 0;
  padding: 0.25em;
  @media only screen and (max-width: 959px) {

    font-size: 2em;

}
@media only screen and (min-width: 768px) and (max-width: 959px) {

  font-size: 2.2em;

}
@media only screen and (max-width: 767px) {

  font-size: 1.5em;

}
@media only screen and (min-width: 480px) and (max-width: 767px) {
  font-size: 1em;
}
@media only screen and (max-width: 479px) {

  font-size: 0.7em;

}
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
export const ModalFechar = styled.button`
  color: #aaaaaa;
  float: left;
  align-self: flex-end;
  font-size: 1em;
  font-weight: bold;
  width: cover;
  margin: 1em;
  margin-top: 0;
  padding: 0.25em ;
  border: 2px, solid black;
  font-family: ${(props) => props.theme.fonts.regular};
  color: red;
  background-color: #ffffff;
`;
