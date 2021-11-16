import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Skeleton  from "../Skeleton/index";


const Card = styled.div`
 width: 5vw;
  height: 9vh;
  display: flex;
  @media only screen and (max-width: 479px) {

    justify-content: space-between;

  }
  @media only screen and (max-width: 479px) {

    width: 20vw;
  height: 9vh;

  }
  @media only screen and (min-width: 480px) and (max-width: 600px) {
    width: 8vw;
   height: 9vh;
  }

  border-radius: 4%;
  background-image: url(${(props) => props.photo});
  background-size: cover;

`;
const Title = styled.span `
  font-family: ${(props) => props.theme.fonts.regular};
  color: #ffffff;
  font-size: 0.8em;
  margin: 0.20em;

  @media only screen and (max-width: 959px) {

    font-size: 0.8em;

}
@media only screen and (min-width: 768px) and (max-width: 959px) {

  font-size: 0.6em;

}
@media only screen and (max-width: 767px) {

  font-size: 0.4em;

}
@media only screen and (min-width: 480px) and (max-width: 767px) {
  font-size: 0.2em;
}
@media only screen and (max-width: 479px) {

  font-size: 0.1em;

}

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
