import styled  from "styled-components";
import Slider from "react-slick";


export const Carousel = styled(Slider)`
.slick-slide{
  @media only screen and (min-width: 479px) {

    margin-right: 0.3%;

  }
  @media only screen and (min-width: 480px) and (max-width: 600px) {
    margin-right: 0.3%;
  }

}
`;
