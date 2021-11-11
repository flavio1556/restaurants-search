import React from "react";
import styled from "styled-components";


const Card = styled.div`
  min-width: 90px;
  height: 90px; 
  padding: 5px;
  justify-content: center;
  border-radius: 6px;
  background-image: url(${(props) => props.photo});  
  background-size: cover;
  
`;
const Title = styled.span `
  font-family: ${(props) => props.theme.fonts.regular}
  color: #ffffff;
  font-size: 16px;
`;

const ImageCard =( { photo, title} ) => (
<Card photo={photo}>
   <Title>{title}</Title>
</Card>
)
export default ImageCard;