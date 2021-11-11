import ReactStars from "react-rating-stars-component";
import React from "react";
import  {RattingStyled} from "./styles"

const Rating = () => {
  return (
    <RattingStyled>
     <ReactStars
      count={5}    
      size={24}
      emptyIcon={<i className="far fa-star"></i>}
      halfIcon={<i className="fa fa-star-half-alt"></i>}
      fullIcon={<i className="fa fa-star"></i>}
      activeColor="#ffd700"
     />
  </RattingStyled>
  )
}

export default Rating;