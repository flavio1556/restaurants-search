import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Skeleton  from "../Skeleton/index";


const Card = styled.div`
 width: 5vw;
  height: 9vh;
  border-radius: 8px;
  background-image: url(${(props) => props.photo});
  background-size: cover;

`;
const Title = styled.span `
  font-family: ${(props) => props.theme.fonts.regular};
  color: #ffffff;
  font-size: 16px;
`;

const ImageCard =( { photo, title} ) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  useEffect (() => {
          const imageLoader = new Image();
          imageLoader.src = photo;
          imageLoader.onload = () => setImageLoaded(true);
  }, [photo])
  return(
    <>
    {imageLoaded ? (
      <div>
         <Card photo={photo}>
            <Title>{title}</Title>
         </Card>
         </div>
    ) :
    (
      <Skeleton  width="5vw" heigth="9vh" />
    )
  }

     </>
  )
}
export default ImageCard;
