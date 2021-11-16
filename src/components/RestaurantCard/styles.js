import styled  from "styled-components";


export const Restaurant = styled.div`
  display: flex;
  justify-content:  space-around;
  cursor: pointer;
  @media only screen and (max-width: 682px) {
    justify-content: flex-start;
    flex-flow: row wrap;
  }
  margin-top: 5px;
  padding: 4%;
  border-left: 5px solid transparent;
  background-color: #ffffff;
  :hover{
    background-color: ${(props) => props.theme.colors.background};
    border-left-color:   ${(props) => props.theme.colors.primary};
  }
`;
export const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 28vw;
`;
export const Title = styled.span `
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-weight: bold;
  margin-bottom: 5%;

  @media only screen and (max-width: 959px) {

    font-size: 1.5em;
    line-height: 1em;

}
@media only screen and (min-width: 768px) and (max-width: 959px) {

  font-size:  1.2em;

}
@media only screen and (max-width: 767px) {

  font-size: 1em;

}
@media only screen and (min-width: 480px) and (max-width: 767px) {
  font-size: 0.8em;
}
@media only screen and (max-width: 479px) {

  font-size: 0.6em;

}
`;

export const Address = styled.span `
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 15%;
  line-height: 1em;
  @media only screen and (max-width: 959px) {

    font-size: 1.5em;
    line-height: 1em;

}
@media only screen and (min-width: 768px) and (max-width: 959px) {

  font-size:  0.8em;

}
@media only screen and (max-width: 767px) {

  font-size:  0.7em;

}
@media only screen and (min-width: 480px) and (max-width: 767px) {
  font-size:  0.5em;
}
@media only screen and (max-width: 479px) {

  font-size:  0.5em;

}

`;
export const RestaurantPhoto = styled.img`
display:  ${(props) => props.imageLoaded  ? 'block' : 'none' };
  width: 10vw;
  height: 10vh;
  @media only screen and (min-width: 479px) {

    margin-left: 10%;

  }
  @media only screen and (max-width: 479px) {

    width: 100%;
  height: 100%;

  }
  object-fit: cover;
  border-radius: 5px;
  background-position: center;
`;
