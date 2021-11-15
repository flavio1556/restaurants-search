import styled  from "styled-components";


export const Restaurant = styled.div`
  display: flex;
  justify-content:  space-around;
  cursor: pointer;
  margin-top: 5px;
  padding: 16px;
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
  max-width: 200px;
`;
export const Title = styled.span `
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
  margin-bottom: 10px;
`;

export const Address = styled.span `
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 12px;
  line-height: 19px;
  margin-bottom: 10px;


`;
export const RestaurantPhoto = styled.img`
  width: 100px;
  height: 100px;
  min-width: 90px;
  min-height: 90%;
  border-radius: 5px;
  background-image: url(${(props)=> props.photo});
  background-position: center;
`;
