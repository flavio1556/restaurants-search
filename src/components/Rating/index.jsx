import ReactStars from "react-rating-stars-component";
import React from "react";
import  {RattingStyled} from "./styles"

const Rating = ({rating}) => {
  return (
    <RattingStyled>
     <ReactStars
      count={5}
      size={24}
      isHalf
      value={rating}
      edit={false}
      emptyIcon={<i className="far fa-star"></i>}
      halfIcon={<i className="fa fa-star-half-alt"></i>}
      fullIcon={<i className="fa fa-star"></i>}
      activeColor="#e7711c"
     />
  </RattingStyled>
  )
}

export default Rating;
